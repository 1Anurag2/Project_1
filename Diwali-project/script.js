
var audio = document.getElementById('audio')
function playAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

const diwaliWishes = [
    "Wishing you a Diwali full of joy and prosperity!",
    "May the Festival of Lights brighten your life with happiness and success.",
    "May this Diwali bring good health, wealth, and happiness to you and your family.",
    "Wishing you a year filled with love, light, and laughter. Happy Diwali!",
    "May the divine light of Diwali spread into your life peace, prosperity, happiness, and good health.",
    "Wishing you a sparkling Diwali and a year filled with warmth and love.",
    "May the beauty of Diwali fill your home with happiness, and may the coming year provide you with everything you've been searching for.",
    ""
];

const wishContainer = document.getElementById("random-wish");
const generateButton = document.getElementById("generate-wish");
const copyButton = document.getElementById("copy-wish");
const wishBox = document.getElementById('wish-box')
const home = document.getElementById('home')

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * diwaliWishes.length);
    const randomWish = diwaliWishes[randomIndex];
    wishContainer.textContent = randomWish;

});

copyButton.addEventListener("click", () => {
    var copyText = wishContainer.value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Wish copied to clipboard!");
    });
    
});

function displayWisher(){
    home.style.display="none"
    wishBox.style.display="block"
}