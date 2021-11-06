import{ initialSetup } from "./modules/initialSetup.js";

const numberOfMatches = 4;
const colorClasses = ['is-green', 'is-pink', 'is-purple', 'is-yellow'];

window.addEventListener('load', () => {
    initialSetup(numberOfMatches);
});