var quotes = [
    'Not how long, but how well you have lived is the main thing. - Seneca',
    'Do all the good you can, for all the people you can, in all the ways you can, as long as you can. - Hillary Clinton',
    'Everything negative - pressure, challenges - is all an opportunity for me to rise. - Kobe Bryant',
    'Life is never easy. There is work to be done and obligations to be met - obligations to truth, to justice, and to liberty. - John F. Kennedy',
    'Many of lifes failures are people who did not realize how close they were to success when they gave up.- Thomas A. Edison'
]

function newQuote() {
    var randomNumber = Math.floor( Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}