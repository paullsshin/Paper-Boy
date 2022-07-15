// FREE NEWS API - BY COUNTRY

const optionsFreeNews = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5f47a5545mshf7b0b0480e8a458p1e6668jsn6b3694c80c47',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

submitBtn.addEventListener('click', function () {
    fetch('https://free-news.p.rapidapi.com/v1/search?q=Canada', optionsFreeNews)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
});

var newsByCountry = document.getElementsByClassName("free-news-container");

// function renderBreakingNews(data) {
//     // For loop iterates through data
//     var articles = [];
//     //recursive function might be easier
//     //could save everything into carasel ( might not be the case for materialize )
//     for (var i = 0; i < 1; i++ ) {
//         // var myArray = [title, link]
//         console.log(data[i].title);
//         // (data[i].title).push();
//         articles.push(data[i].title);
//         console.log(articles);
//     }

//     breakingNews.innerHTML = '';
//     breakingNews.append(articles);
// }



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
