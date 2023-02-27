function displayBackgroundImage() {
    fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=ukraine')
        .then(res => res.json())
        .then(data => {
            document.body.style.backgroundImage = `url(${data.urls.regular})`
            document.getElementById('img-location').textContent = `${data.location.name}`;
        })
        .catch(err => {
            document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1581545089841-9423c2ec0548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzcxNzIxMDg&ixlib=rb-4.0.3&q=80&w=1080)`; 
        })
}

function displayCryptoInfo() {
    fetch('https://api.coingecko.com/api/v3/coins/dogecoin?localization=en&tickers=false&community_data=false&developer_data=false&sparkline=false')
        .then(res => {
            if (!res.ok) {
                throw Error('Something went wrong...');
            }
            return res.json();
        })
        .then(data => {
            document.getElementById('crypto-top').innerHTML = `
                <img src="${data.image.small}" alt="dogecoin icon"><p>${data.name}</p>
            `;
            document.getElementById('crypto-bottom').innerHTML = `
                <p><i class="fa-solid fa-bullseye"></i> ₴${data.market_data.current_price.uah}</p>
                <p><i class="fa-solid fa-hand-point-up"></i> ₴${data.market_data.high_24h.uah}</p>
                <p><i class="fa-solid fa-hand-point-down"></i> ₴${data.market_data.low_24h.uah}</p>
            `;
        })
        .catch(err => console.error(err))
}

function displayCurrentTime() {
    const today = new Date();
    document.getElementById('time').textContent = today.toLocaleTimeString();
    document.getElementById('date').textContent = today.toLocaleDateString();
}

function displayWeather() {
    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
            .then(res => {
                if (!res.ok) {
                    throw Error('Weather data is not available');
                }
                return res.json();
            })
            .then(data => {
                document.getElementById('weather').innerHTML= `
                    <div id="weather-top">
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""weather icon>
                        <span id="temp">${Math.round(data.main.temp)}°C</span>
                    </div>
                    <p id="city">Kharkiv</p>
                    <!-- <p id="city">${data.name}</p> -->
                `;
            })
            .catch(err => console.error(err))
    }, 
    err => { console.warn(`ERROR(${err.code}): ${err.message}`) }, 
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 })
}  

displayBackgroundImage()
setInterval(displayBackgroundImage, 3600000)

displayCryptoInfo()
setInterval(displayCryptoInfo, 3600000)

displayWeather()
setInterval(displayWeather, 3600000)

displayCurrentTime()
setInterval(displayCurrentTime, 1000)