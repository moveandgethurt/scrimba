fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=ukraine')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById('img-location').textContent = `${data.location.name}`;
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1581545089841-9423c2ec0548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzcxNzIxMDg&ixlib=rb-4.0.3&q=80&w=1080)`;
        
    })
