// import main  from "../scripts/main.js";

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("this is popup.js");
    const youtubeLink = document.getElementById("youtube-link");
    const youtubeLinkValue = youtubeLink.value;  
    const url = new URL(youtubeLinkValue);
    const videoId = url.searchParams.get('v');
    console.log(searchParameters); 
    main(videoId);
    
});

