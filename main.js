var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote() {
    fetch(endpoint)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        displayQuote(data.message)
    })
    .catch(function () {
        console.log("An error occurred");
    })
}

function displayQuote(quote) {
    // target the blockQuote element from HTML, that is where we want out quote to get displayed
    var blockQuote = document.querySelector('.quote-text');
    blockQuote.textContent = quote ;

}

// Target button with class new-quote
var newQuoteButton = document.querySelector('.button-64');

newQuoteButton.addEventListener("click", getQuote);

getQuote();