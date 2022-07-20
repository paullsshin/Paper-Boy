var searchHistory = [];
var searchHistoryContainer = document.querySelector('#history');
var saveSearchHistory = JSON.parse(localStorage.getItem("search-history"));
if (saveSearchHistory){
  searchHistory = saveSearchHistory;
}
var searchHistoryLength = searchHistory.length;
console.log(searchHistoryLength);
// Function to display the search history list.
function renderSearchHistory() {
    searchHistoryContainer.innerHTML = '';
    console.log(searchHistoryContainer);
    if( searchHistoryLength > 3){
      console.log("hi");
      searchHistory.splice(0, 1);
      console.log(searchHistoryLength)
      console.log(searchHistory);
      console.log("hi");
    }
    // Start at end of history array and count down to show the most recent at the top.
    for (var i = searchHistory.length - 1; i >= 0; i--) {
      var btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      // btn.setAttribute('aria-controls');
      btn.classList.add('history-btn', 'btn-history');
      console.log(searchHistory);
      // `data-search` allows access to city name when click handler is invoked
      btn.setAttribute('data-search', searchHistory[i]);
      btn.textContent = searchHistory[i];
      searchHistoryContainer.append(btn);
      console.log(searchHistoryContainer);
    }
  }
  // Function to update history in local storage then updates displayed history.
  function appendToHistory(search) {
    // If there is no search term return the function
    if (searchHistory.indexOf(search) !== -1) {
      return;
    }
    searchHistory.push(search);
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
    renderSearchHistory();
  }
  // Function to get search history from local storage
  function initSearchHistory() {
    var storedHistory = localStorage.getItem('search-history');
    if (storedHistory) {
      searchHistory = JSON.parse(storedHistory);
    }
    renderSearchHistory();
  }
  function handleSearchHistoryClick(e) {
    // Don't do search if current elements is not a search history button
    if (!e.target.matches('.btn-history')) {
      return;
    }
    var btn = e.target;
    var search = btn.getAttribute('data-search');
    selectCountry(search);
  }
// FREE NEWS API - BY COUNTRY
const optionsFreeNews = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '73cb815fb9mshc2fa8107eefe7c8p12f2d6jsn4061f70be412',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
  }
};
// var searchCountryName = document.get
submitBtn.addEventListener('click', function () {
    console.log(searchHistory);
    searchHistory.push(storedCountry)
    console.log(searchHistory);
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
    fetch('https://free-news.p.rapidapi.com/v1/search?q=' + storedCountry + '&lang=en', optionsFreeNews)
  .then(response => response.json())
  .then(response => renderFreeNews(response))
  .catch(err => console.error(err));
});
var selectCountry = document.querySelector('select');
var storedCountry = "";
var result = '';
selectCountry.addEventListener('change', () => {
  storedCountry = selectCountry.value;
  console.log(selectCountry)
    console.log("Hello");
})
function renderFreeNews(data) {
    console.log(data);
    //prints title to each card
    var newsByCountry = $(".free-news-container");
    newsByCountry.html("");
    //prints content to each card
    for (var i = 0; i < 10; i++ ) {
        var card =
        `
        <div class="row">
          <div class="col">
            <!-- changes background color to the card. -->
            <div class="card  blue darken-2">
              <div class="card-content white-text">
                <span class="card-title">${data.articles[i].title}</span>
                <p class="content">${data.articles[i].summary}</p>
              </div>
              <div class="card-action">
                <a href="${data.articles[i].link}" target="blank">Go to Article</a>
              </div>
            </div>
          </div>
        </div>
       `
    newsByCountry.append(card);
    }
}
// BREAKING NEWS API
const optionsBreakingNews = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '13446d5776mshd3db888b762b426p125c86jsn326dd005bf30',
    'X-RapidAPI-Host': 'google-top-news.p.rapidapi.com'
  }
};
function renderBreakingNews(data) {
    // For loop iterates through data
    console.log(data)
    // var articles = [];
    //recursive function might be easier
    //could save everything into carasel ( might not be the case for materialize )
    // future feature to be added in order to cycle through articles
    //for (var i = 0; i < 1; i++ ) {
        var breakingCard =
        `
         <!-- Turns the news container to a dark red -->
          <div class="card red darken-3">
            <div class="card-content white-text">
              <span class="card-title">Breaking News!</span>
              <p class ="breaking-news">${data[0].title}</p>
            </div>
            <div class="card-action">
              <a href="${data[0].link}" target="blank">Go to Article</a>
            </div>
          </div>
        `
    //}
    console.log(breakingCard)
    var breakingNews = $(".breaking-news");
    breakingNews.append(breakingCard);
}
// window.addEventListener('load', function () {
//     fetch('https://google-top-news.p.rapidapi.com/news/breaking%20news?images=true', optionsBreakingNews)
//      .then(response => response.json())
//      .then(response => renderBreakingNews(response))
//         .then(response => console.log(response))
// });
// var breakingNews = document.getElementById("breaking-news");
// submitBtn.addEventListener('click', function () {
// });
function getBreakingNews() {
    fetch('https://google-top-news.p.rapidapi.com/news/breaking%20news?images=true', optionsBreakingNews)
      .then(response => response.json())
      .then(response => renderBreakingNews(response))
      .catch(err => console.error(err));
}
getBreakingNews();
// var favoriteBtn = document.getElementsByClassName(".favorite-button")
// favoriteBtn.addEventListener('click', function () {
//     console.log("button click");
// });
// clicking on favorite, set eventlistener to capture article data etc.,
// save data to local storage, pull data from local storage and then render to favorites page
//
document.getElementById("submitBtn").onclick = function () {
  document.getElementById("paper-boy").style.display = "none";
}
// document.getElementById("start-it").onclick = function () {
//   document.getElementById("welcome").style.visibility = "hidden";
// }
initSearchHistory();
searchHistoryContainer.addEventListener('click', handleSearchHistoryClick);