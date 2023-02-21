let searchResultsImdb = [];
let searchResultsObject = [];

const searchBtn = document.getElementById('search');
const siteSearchInput = document.getElementById('site-search');

searchBtn.addEventListener('click', getMoviesList)

async function getMoviesList() {
    const res = await fetch(`http://www.omdbapi.com/?apikey=f2a64d41&s=${siteSearchInput.value}`);
    const data = await res.json();

    console.log(data.Search)
    searchResultsImdb = data.Search.map(item => item.imdbID);
    console.log(searchResultsImdb)

    searchResultsImdb.forEach(function(imdbID) {
        fetch(`http://www.omdbapi.com/?apikey=f2a64d41&i=${imdbID}&plot=short`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                searchResultsObject.push({
                    title: data.Title,
                    rating: data.imdbRating,
                    runtime: data.Runtime,
                    genre: data.Genre,
                    plot: data.Plot,
                    poster: data.Poster
                });
                console.log(searchResultsObject)

                let html = '';
                searchResultsObject.forEach(function(movie) {
                    // insert here valid html string, not only w/ <img>
                    html += `
                        <img src="${movie.poster}">
                    `;
                })
                document.getElementById('main-container').innerHTML = html;
            })
            
    })
}