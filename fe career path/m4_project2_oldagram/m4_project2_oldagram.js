const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const iconHeart = document.getElementById("icon-heart");
const iconComment = document.getElementById("icon-comment");
const iconDm = document.getElementById("icon-dm");

// const iconArr = [iconHeart, iconComment, iconDm];

// for (let i = 0; i < iconArr.length; i++) {

// }

// icon heart behavior

iconHeart.addEventListener("mouseover", function() {
    iconHeart.src = "images/icon-heart-hover.png";
})
iconHeart.addEventListener("mouseout", function() {
    iconHeart.src = "images/icon-heart.png";
})
iconHeart.addEventListener("click", function() {
    iconHeart.src = "images/icon-heart-click.png";
    iconHeart.addEventListener("mouseout", function() {
        iconHeart.src = "images/icon-heart-click.png";
    })
})
iconHeart.addEventListener("dblclick", function() {
    iconHeart.src = "images/icon-heart.png";
    iconHeart.addEventListener("mouseout", function() {
        iconHeart.src = "images/icon-heart.png";
    })
})

// icon comment behavior

iconComment.addEventListener("mouseover", function() {
    iconComment.src = "images/icon-comment-hover.png";
})
iconComment.addEventListener("mouseout", function() {
    iconComment.src = "images/icon-comment.png";
})
iconComment.addEventListener("click", function() {
    iconComment.src = "images/icon-comment-click.png";
    iconComment.addEventListener("mouseout", function() {
        iconComment.src = "images/icon-comment-click.png";
    })
})
iconComment.addEventListener("dblclick", function() {
    iconComment.src = "images/icon-comment.png";
    iconComment.addEventListener("mouseout", function() {
        iconComment.src = "images/icon-comment.png";
    })
})

// icon dm behavior

iconDm.addEventListener("mouseover", function() {
    iconDm.src = "images/icon-dm-hover.png";
})
iconDm.addEventListener("mouseout", function() {
    iconDm.src = "images/icon-dm.png";
})
iconDm.addEventListener("click", function() {
    iconDm.src = "images/icon-dm-click.png";
    iconDm.addEventListener("mouseout", function() {
        iconDm.src = "images/icon-dm-click.png";
    })
})
iconDm.addEventListener("dblclick", function() {
    iconDm.src = "images/icon-dm.png";
    iconDm.addEventListener("mouseout", function() {
        iconDm.src = "images/icon-dm.png";
    })
})
