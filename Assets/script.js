// FREE NEWS API - BY COUNTRY

const optionsFreeNews = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5f47a5545mshf7b0b0480e8a458p1e6668jsn6b3694c80c47',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};



// var searchCountryName = document.get
submitBtn.addEventListener('click', function () {
    fetch('https://free-news.p.rapidapi.com/v1/search?q=' + selectCountry + '&lang=en', optionsFreeNews)
	.then(response => response.json())
	.then(response => renderFreeNews(response))
	.catch(err => console.error(err));
});

var selectCountry = document.querySelector('select');
var result = '';

selectCountry.addEventListener('change', () => {
  selectCountry = selectCountry.options[selectCountry.selectedIndex].text;
  console.log(selectCountry)
})



function renderFreeNews(data) {
    console.log(data);
    // newsByCountry.innerHTML = '';

    //prints title to each card
    //prints content to each card
    for (var i = 0; i < 5; i++ ) {
        
        var card = 
        `
        <div class="row">
          <div class="col">
            <!-- changes background color to the card. -->
            <div class="card light-blue lighten-4">
              <div class="card-content white-text">
                <span class="card-title">${data.articles[i].title}</span>
                <p class="content">${data.articles[i].summary}</p>
              </div>
              <div class="card-action">
                <a href="${data.articles[i].link}" target="blank">Go to Article</a>
                <button class = "btn cyan lighten-1 favorite-btn" href="#">Favorite</button>
              </div>
            </div>
          </div>
        </div>
       `
    var newsByCountry = $(".free-news-container");
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
              <!-- Add color to the favorite button -->
              <button class = "btn cyan lighten-1 favorite-btn" href="#">Favorite</button>
              <button class = "btn cyan lighten-1" href="#">Next</button>
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
// 	    .then(response => response.json())
// 	    .then(response => renderBreakingNews(response))
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