import main  from "../scripts/main.js";
// import {config} from "dotenv";
// config();   

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", async(event) => {
    event.preventDefault();
    console.log("this is popup.js");
    const youtubeLink = document.getElementById("youtube-link");
    const youtubeLinkValue = youtubeLink.value;  
    const response = await main(youtubeLinkValue);
    if(response == "success") {
        console.log(200);
    } 
    if(response == "failure") {
        console.log("ERROR");
    }
});

