document.getElementById('bored-bot').addEventListener('click', function(){
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById('idea').textContent = data.activity;
            document.getElementById('title').textContent = '! HappyBot !';
            document.body.classList.add('happy-body');
            document.getElementById('bored-bot').classList.add('happy-button');
        })  
})