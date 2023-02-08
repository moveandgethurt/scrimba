class Dog {
    constructor(data) {
        Object.assign(this, data);
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this;
        return `
            <div id="hero">
                <img id="hero-img" src="${avatar}" alt="${name}">
                <div id="hero-description">
                    <p id="name-age">${name}, ${age}</p>
                    <p id="bio">${bio}</p>
                </div>
                <div id="badge">
                </div>
            </div>`
    }
}

export default Dog