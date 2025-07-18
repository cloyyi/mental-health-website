// Mapping of animal to meme image URLs (you can replace these with real meme URLs or API later)
const animalMemes = {
    panda: [
        "https://i.redd.it/3s9y5w91zbp51.jpg",
        "https://i.pinimg.com/564x/7a/46/b2/7a46b2d7f75805302a8e66c4389a4be5.jpg"
    ],
    dog: [
        "https://i.kym-cdn.com/entries/icons/original/000/028/491/Screen_Shot_2019-02-05_at_11.22.32_AM.jpg",
        "https://i.redd.it/w3kr4m2fi3111.jpg"
    ],
    cat: [
        "https://i.pinimg.com/originals/62/fb/91/62fb91b26df163029b098b1c2276317c.jpg",
        "https://i.redd.it/cats_memes_01.jpg"
    ]
};

// This function displays a random meme related to the clicked animal
function showMeme(animal) {
    const memeContainer = document.getElementById("memeDisplay");
    memeContainer.innerHTML = ""; // Clear previous image

    const memes = animalMemes[animal];
    if (memes && memes.length > 0) {
        const randomIndex = Math.floor(Math.random() * memes.length);
        const memeUrl = memes[randomIndex];

        const img = document.createElement("img");
        img.src = memeUrl;
        img.alt = `${animal} meme`;
        img.style.maxWidth = "100%";
        img.style.borderRadius = "12px";
        img.style.marginTop = "20px";

        memeContainer.appendChild(img);
    } else {
        memeContainer.innerHTML = `<p>No memes found for ${animal}</p>`;
    }
}

// Attach click events to buttons
document.addEventListener("DOMContentLoaded", () => {
    const pandaBtn = document.getElementById("pandaBtn");
    const dogBtn = document.getElementById("dogBtn");
    const catBtn = document.getElementById("catBtn");

    if (pandaBtn) pandaBtn.addEventListener("click", () => showMeme("panda"));
    if (dogBtn) dogBtn.addEventListener("click", () => showMeme("dog"));
    if (catBtn) catBtn.addEventListener("click", () => showMeme("cat"));
});

