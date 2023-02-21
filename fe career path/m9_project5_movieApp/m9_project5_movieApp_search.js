let searchResultsImdb = [];
let searchResultsObject = [];

const searchBtn = document.getElementById('search');
const siteSearchInput = document.getElementById('site-search');

searchBtn.addEventListener('click', getMoviesList)

async function getMoviesList() {
    const res = await fetch(`http://www.omdbapi.com/?apikey=f2a64d41&s=${siteSearchInput.value}&type=movie`);
    const data = await res.json();
    console.log(data.Search)
    
    searchResultsImdb = data.Search.map(item => item.imdbID).slice(0,3);
    console.log(searchResultsImdb)

    searchResultsImdb.forEach(async function(imdbID) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=f2a64d41&i=${imdbID}&plot=short`);
        const data = await res.json();
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
            html += `
                <div class="movie-container">
                    <img class="poster" src="${movie.poster}" alt="movie poster">
                    <div class="movie-desc-wrap">
                        <div class="title-rating-wrap">
                            <h3 class="title">${movie.title}</h3>
                            <p class="rating">
                                <i class="fa-solid fa-star"></i>
                                ${movie.rating}
                            </p>
                        </div>
                        <div class="runtime-genre-addbtn-wrap">
                            <p class="runtime">${movie.runtime}</p>
                            <p class="genre">${movie.genre}</p>
                            <button id="add-movie">
                                <p class="watchlist">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    Watchlist
                                </p>
                            </button>
                        </div>
                        <div class="plot-wrap">
                            <p class="plot">${movie.plot}</p>
                        </div>
                    </div>
                </div>
                <hr class="divider">
            `;
        })

        document.getElementById('main-container').innerHTML = html;
    })
}