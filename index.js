const TelegramBot = require('node-telegram-bot-api');
const RedditImageFetcher = require("reddit-image-fetcher");
var cron = require('node-cron');

const token = '5692204674:AAFjOuSDfHwWWd6Gu-cPDsZuOkukfkaqFeI';

const bot = new TelegramBot(token, {polling: true});

const chatId = '-1001632701126'

cron.schedule('* * * * *', () => {
    RedditImageFetcher.fetch({
        type: 'custom',
        subreddit: ['legalTeens', 'BeautifulTitsAndAss', 'collegessluts', 'girlsinyogapants'],
        total: 5
    }).then(result => {
        result.map((image)=>{
            console.log("every minute");
            return bot.sendPhoto(chatId, image.image);
        });
        
    });
});
