let postsArr = [];
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');
const form = document.getElementById('new-post');

function renderPosts() {
    let postsHtml = '';
    postsArr.forEach(function(post){
        postsHtml += `
        <div class="post-container">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
        </div>
    `;
    })
    document.getElementById('blog-posts').innerHTML = postsHtml;
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5)
        renderPosts();
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    const post = {
        title: postTitle.value,
        body: postBody.value
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(post => {
            postsArr.unshift(post);
            renderPosts()
            form.reset();
        })
})



