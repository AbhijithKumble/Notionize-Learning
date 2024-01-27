import main  from "../scripts/main.js";

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let youtubeLink = document.getElementById("youtube-link");
    let youtubeLinkValue = youtubeLink.value;  
    console.log(youtubeLinkValue);
    main(youtubeLinkValue);
    
});

