function getRandomData(data) {
    let randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

const data = [
    {
        text: "If you want rainbow, you have to deal with the rain.",
        author: "Augustus",
        image: "../image/augustus.jpg",
        font: '"Cinzel", serif',
        color: "white"
    },
    {
        text: "Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.",
        author: "Winston Churchill",
        image: "../image/winston.jpg",
        font: '"Tinos", serif',
        color: "white"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.querySelector(".main-quote");
    const authorElement = document.querySelector(".main-author");
    const button = document.getElementById("button");
    const mainElement = document.querySelector("main");

    button.addEventListener("click", () => {
        const randomData = getRandomData(data);
        
        quoteElement.innerText = randomData.text;
        authorElement.innerText = `- ${randomData.author}`;
        authorElement.style.color = randomData.color
        quoteElement.style.fontFamily = randomData.font;
        quoteElement.style.color = randomData.color

        mainElement.style.backgroundImage = `url('${randomData.image}')`;
    });
});
