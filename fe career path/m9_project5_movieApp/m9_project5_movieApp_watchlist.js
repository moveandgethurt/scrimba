function renderWatchlist() {
    let html = '';

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let movieObjName = localStorage.key(i);
            let movieObjLS = JSON.parse(localStorage.getItem(movieObjName));
            console.log(movieObjName, movieObjLS);
        
            html += `
                    <div class="movie-container" id=${movieObjLS.imdb}>
                        <img class="poster" src="${movieObjLS.poster}" alt="movie poster">
                        <div class="movie-desc-wrap">
                            <div class="title-rating-wrap">
                                <h3 class="title">${movieObjLS.title}</h3>
                                <p class="rating">
                                    <i class="fa-solid fa-star"></i>
                                    ${movieObjLS.rating}
                                </p>
                            </div>
                            <div class="runtime-genre-addbtn-wrap">
                                <p class="runtime">${movieObjLS.runtime}</p>
                                <p class="genre">${movieObjLS.genre}</p>
                                <button id="remove-movie" class="${movieObjLS.imdb}">
                                    <p class="remove">
                                        <i class="fa-solid fa-circle-minus"></i>
                                        Remove
                                    </p>
                                </button>
                            </div>
                            <div class="plot-wrap">
                                <p class="plot">${movieObjLS.plot}</p>
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
        let movieObjName = localStorage.key(i);
        let movieObjLS = JSON.parse(localStorage.getItem(movieObjName));
        console.log(movieObjName, movieObjLS);

        document.querySelector(`.${movieObjLS.imdb}`).addEventListener('click', function(){
            localStorage.removeItem(`movieObj${movieObjLS.imdb}`);
            window.location.reload()
        })
    }
}
