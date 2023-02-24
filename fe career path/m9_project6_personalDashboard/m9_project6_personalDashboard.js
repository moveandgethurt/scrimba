fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=ukraine')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById('img-location').textContent = `${data.location.name}`;
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1581545089841-9423c2ec0548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzcxNzIxMDg&ixlib=rb-4.0.3&q=80&w=1080)`; 
    })

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

function displayCurrentTime() {
    const today = new Date();
    const date = today.toLocaleDateString();
    document.getElementById('time').textContent = today.toLocaleTimeString();
    document.getElementById('date').textContent = today.toLocaleDateString();
}

setInterval(displayCurrentTime, 1000)