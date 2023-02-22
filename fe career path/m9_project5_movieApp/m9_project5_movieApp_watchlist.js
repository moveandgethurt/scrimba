function renderWatchlist() {
    let html = '';

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let movieObjKey = localStorage.key(i);
            let movieObjValue = JSON.parse(localStorage.getItem(movieObjKey));
            
            html += `
                    <div class="movie-container" id=${movieObjValue.imdb}>
                        <img class="poster" src="${movieObjValue.poster}" alt="movie poster">
                        <div class="movie-desc-wrap">
                            <div class="title-rating-wrap">
                                <h3 class="title">${movieObjValue.title}</h3>
                                <p class="rating">
                                    <i class="fa-solid fa-star"></i>
                                    ${movieObjValue.rating}
                                </p>
                            </div>
                            <div class="runtime-genre-addbtn-wrap">
                                <p class="runtime">${movieObjValue.runtime}</p>
                                <p class="genre">${movieObjValue.genre}</p>
                                <button id="remove-movie" class="${movieObjValue.imdb}">
                                    <p class="remove">
                                        <i class="fa-solid fa-circle-minus"></i>
                                        Remove
                                    </p>
                                </button>
                            </div>
                            <div class="plot-wrap">
                                <p class="plot">${movieObjValue.plot}</p>
                            </div>
                        </div>
                    </div>
                    <hr class="divider">
                `;
        
        }

        document.getElementById('main-container').innerHTML = html;

        removeFromLocalStorage()
    } else {
        document.getElementById('main-container').innerHTML = `
        <div class="main-wrap">
            <p>Your watchlist is looking a little empty...</p>
            <a href="./m9_project5_movieApp_search.html">
                <div class="add-wrap">
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>Let's add some movies!</p>
                </div>
            </a>
        </div>
        `;
    }
}

renderWatchlist();

function removeFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let movieObjKey = localStorage.key(i);
        let movieObjValue = JSON.parse(localStorage.getItem(movieObjKey));
        
        document.querySelector(`.${movieObjValue.imdb}`).addEventListener('click', function(){
            localStorage.removeItem(`movieObj${movieObjValue.imdb}`);
            window.location.reload()
        })
    }
}
