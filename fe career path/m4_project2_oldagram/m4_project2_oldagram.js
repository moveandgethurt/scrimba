const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        wiki: 'https://en.wikipedia.org/wiki/Vincent_van_Gogh',
        map: 'https://goo.gl/maps/oFzNgCVakYqL4kiF8'
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        wiki: 'https://en.wikipedia.org/wiki/Gustave_Courbet',
        map: 'https://goo.gl/maps/wXxSPSTmYjxKEM8y9'
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        wiki: 'https://en.wikipedia.org/wiki/Joseph_Ducreux',
        map: 'https://goo.gl/maps/b4ocBQB6XFS88Qkm8'
    }
]

posts.forEach(({ avatar, name, location, map, post, wiki, likes, username, comment}) => {
    let postContainer = document.createElement('div');
    postContainer.className = 'post-container';
    document.getElementById('post-section').appendChild(postContainer);

    // user-info-container
    let userInfoContainer = document.createElement('div');
    userInfoContainer.className = 'user-info-container';
    postContainer.appendChild(userInfoContainer);

    let aTag = document.createElement('a');
    aTag.setAttribute('href', wiki);
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('rel', 'noopener noreferrer');
    userInfoContainer.appendChild(aTag);
  
    let avatarEl = document.createElement("img");
    avatarEl.id = 'avatar';
    avatarEl.src = avatar;
    avatarEl.innerHTML = avatar;
    aTag.appendChild(avatarEl);

    let nameLocation = document.createElement('div');
    nameLocation.className = 'name-location';
    userInfoContainer.appendChild(nameLocation);

    aTag = document.createElement('a');
    aTag.setAttribute('href', wiki);
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('rel', 'noopener noreferrer');
    nameLocation.appendChild(aTag);

    let nameEl = document.createElement("span");
    nameEl.id = 'name';
    nameEl.innerHTML = name;
    aTag.appendChild(nameEl);
    
    aTag = document.createElement('a');
    aTag.setAttribute('href', map);
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('rel', 'noopener noreferrer');
    nameLocation.appendChild(aTag);

    let locationEl = document.createElement("span");
    locationEl.id = 'location';
    locationEl.innerHTML = location;
    aTag.appendChild(locationEl);

    // post-image-container
    let postImageContainer = document.createElement('div');
    postImageContainer.className = 'post-image-container';
    postContainer.appendChild(postImageContainer);

    let postEl = document.createElement("img");
    postEl.id = 'post';
    postEl.src = post;
    postEl.innerHTML = post;
    postImageContainer.appendChild(postEl);

    // icon-container
    let iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';
    postContainer.appendChild(iconContainer);

    let iconHeartEl = document.createElement("img");
    iconHeartEl.id = 'icon-heart';
    iconHeartEl.className = 'icon';
    iconHeartEl.src = 'images/icon-heart.png';
    iconHeartEl.alt = 'icon heart';
    iconContainer.appendChild(iconHeartEl);

    let iconCommentEl = document.createElement("img");
    iconCommentEl.id = 'icon-comment';
    iconCommentEl.className = 'icon';
    iconCommentEl.src = 'images/icon-comment.png';
    iconCommentEl.alt = 'icon comment';
    iconContainer.appendChild(iconCommentEl);

    let iconDmEl = document.createElement("img");
    iconDmEl.id = 'icon-dm';
    iconDmEl.className = 'icon';
    iconDmEl.src = 'images/icon-dm.png';
    iconDmEl.alt = 'icon dm';
    iconContainer.appendChild(iconDmEl);

    // icons behavior

    // icon heart behavior
    iconHeartEl.addEventListener("mouseover", function() {
        iconHeartEl.src = "images/icon-heart-hover.png";
    })
    iconHeartEl.addEventListener("mouseout", function() {
        iconHeartEl.src = "images/icon-heart.png";
    })
    iconHeartEl.addEventListener("click", function() {
        likes++;
        likesEl.innerHTML = likes + " likes";
        iconHeartEl.src = "images/icon-heart-click.png";
        iconHeartEl.addEventListener("mouseout", function() {
            iconHeartEl.src = "images/icon-heart-click.png";
        })
    })
    iconHeartEl.addEventListener("dblclick", function() {
        iconHeartEl.src = "images/icon-heart.png";
        iconHeartEl.addEventListener("mouseout", function() {
            iconHeartEl.src = "images/icon-heart.png";
        })
    })

    // icon comment behavior
    iconCommentEl.addEventListener("mouseover", function() {
        iconCommentEl.src = "images/icon-comment-hover.png";
    })
    iconCommentEl.addEventListener("mouseout", function() {
        iconCommentEl.src = "images/icon-comment.png";
    })
    iconCommentEl.addEventListener("click", function() {
        iconCommentEl.src = "images/icon-comment-click.png";
        iconCommentEl.addEventListener("mouseout", function() {
            iconCommentEl.src = "images/icon-comment-click.png";
        })
    })
    iconCommentEl.addEventListener("dblclick", function() {
        iconCommentEl.src = "images/icon-comment.png";
        iconCommentEl.addEventListener("mouseout", function() {
            iconCommentEl.src = "images/icon-comment.png";
        })
    })

    // icon dm behavior
    iconDmEl.addEventListener("mouseover", function() {
        iconDmEl.src = "images/icon-dm-hover.png";
    })
    iconDmEl.addEventListener("mouseout", function() {
        iconDmEl.src = "images/icon-dm.png";
    })
    iconDmEl.addEventListener("click", function() {
        iconDmEl.src = "images/icon-dm-click.png";
        iconDmEl.addEventListener("mouseout", function() {
            iconDmEl.src = "images/icon-dm-click.png";
        })
    })
    iconDmEl.addEventListener("dblclick", function() {
        iconDmEl.src = "images/icon-dm.png";
        iconDmEl.addEventListener("mouseout", function() {
            iconDmEl.src = "images/icon-dm.png";
        })
    })

    // likes-container
    let likesContainer = document.createElement('div');
    likesContainer.className = 'likes-container';
    postContainer.appendChild(likesContainer);

    let likesEl = document.createElement("span");
    likesEl.id = 'likes';
    likesEl.innerHTML = likes + " likes";
    likesContainer.appendChild(likesEl);

    postEl.addEventListener('dblclick', function() {
        likes++;
        likesEl.innerHTML = likes + " likes";
        iconHeartEl.src = "images/icon-heart-click.png";
        iconHeartEl.addEventListener("mouseout", function() {
            iconHeartEl.src = "images/icon-heart-click.png";
        })
    })
  
    // comment-info-container
    let commentInfoContainer = document.createElement('div');
    commentInfoContainer.className = 'comment-info-container';
    postContainer.appendChild(commentInfoContainer);

    aTag = document.createElement('a');
    aTag.setAttribute('href', wiki);
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('rel', 'noopener noreferrer');
    commentInfoContainer.appendChild(aTag);

    let usernameEl = document.createElement("span");
    usernameEl.id = 'username';
    usernameEl.innerHTML = username;
    aTag.appendChild(usernameEl);
  
    let commentEl = document.createElement("span");
    commentEl.id = 'comment';
    commentEl.innerHTML = comment;
    commentInfoContainer.appendChild(commentEl);
});

// sticky header onscroll

window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
