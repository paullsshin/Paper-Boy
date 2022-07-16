// FREE NEWS API - BY COUNTRY

var input = document.getElementById("userInput").value;

const optionsFreeNews = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5f47a5545mshf7b0b0480e8a458p1e6668jsn6b3694c80c47',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};
// var searchCountryName = document.get
submitBtn.addEventListener('click', function () {
    fetch('https://free-news.p.rapidapi.com/v1/search?q=Canada', optionsFreeNews)
	.then(response => response.json())
	.then(response => renderFreeNews(response))
	.catch(err => console.error(err));
    console.log(input)
});



function renderFreeNews(data) {
    console.log(data);
    // newsByCountry.innerHTML = '';

    //prints title to each card
    //prints content to each card
    for (var i = 0; i < 5; i++ ) {
        
        var card = 
        `
        <div class="row">
        <div class="col s12">
          <!-- changes background color to the card. -->
          <div class="card light-blue lighten-4">
            <div class="card-content white-text">
              <span class="card-title">${data.articles[i].title}</span>
              <p class="content">${data.articles[i].summary}</p>
            </div>
            <div class="card-action">
              <a href="${data.articles[i].link}">Go to Article</a>
              <button class = "btn cyan lighten-1" href="#">Favorite</button>
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

window.addEventListener('load', function () {
    fetch('https://google-top-news.p.rapidapi.com/news/breaking%20news?images=true', optionsBreakingNews)
	    .then(response => response.json())
	    .then(response => renderBreakingNews(response))
        .then(response => console.log(response))  
});


var breakingNews = document.getElementById("breaking-news");
submitBtn.addEventListener('click', function () {
    
});

var breakingNews = document.getElementById("breaking-news");

function getBreakingNews() {

    fetch('https://google-top-news.p.rapidapi.com/news/breaking%20news?images=true', optionsBreakingNews)
	    .then(response => response.json())
	    .then(response => renderBreakingNews(response))
	    .catch(err => console.error(err));

}

function renderBreakingNews(data) {
    // For loop iterates through data
    var articles = [];
    //recursive function might be easier
    //could save everything into carasel ( might not be the case for materialize )
    for (var i = 0; i < 1; i++ ) {
        // var myArray = [title, link]
        console.log(data[i].title);
        // (data[i].title).push();
        articles.push(data[i].title);
        console.log(articles);
    }

    breakingNews.innerHTML = '';
    breakingNews.append(articles);
}

getBreakingNews();