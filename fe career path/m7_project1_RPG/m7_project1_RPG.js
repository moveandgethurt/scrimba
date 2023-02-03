import characterData from "./m7_project1_RPG_data.js";
import Character from "./m7_project1_RPG_Character.js";

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();    
}

render()
