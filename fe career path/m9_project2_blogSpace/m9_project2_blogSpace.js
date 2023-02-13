fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        postsArr.forEach(function(post){
            document.getElementById('blog-posts').innerHTML += `
                <div class="post-container">
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-body">${post.body}</p>
                </div>
            `;
        })
    })