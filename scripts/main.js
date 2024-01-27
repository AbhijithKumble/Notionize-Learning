import getTranscript from "./youtube.transcript.js";
import { summariser } from "./google.ai.js";
import { notionAPI } from "./notion.js";

const main = async (videoId) => {
    console.log(videoId);

    // get the transcript from youtube-transcript.py
    let transcriptToSummarise = '';

    await getTranscript(videoId)
        .then(transcript => {
            transcriptToSummarise = transcript;
        })
        .catch(error => {
            console.error('Error getting transcript: ', error );
        });  


    // summarise using google ai 
    // console.log(transcriptToSummarise)
    //summarised response

    const responseFromGoogleAI = await summariser(transcriptToSummarise);
    
    console.log(responseFromGoogleAI);  

    //store in notion database given by the user 
    
    const responseFromNotion = await notionAPI(responseFromGoogleAI);


};

main("UYySvyc4M68");

// export default main;

// =========================================




// const main = () => {
//     console.log("this is main and working");




// };



/* 

document.addEventListener("DOMContentLoaded", function (event) {
    const submitButton = document.getElementById("submit-button");
    const videoLinkInput = document.getElementById("youtube-link");

    const nonce = generateRandomNonce();
    document.getElementById("youtube-link").setAttribute("nonce", nonce);

    function generateRandomNonce() {
        const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const nonceLength = 32; // You can adjust the length as needed
        let nonce = "";

        for (let i = 0; i < nonceLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            nonce += charset[randomIndex];
        }
        return nonce;
    }

    submitButton.disabled = "true";    

    const disableEnable = () => {
        let linkInputValue = videoLinkInput.value;
        if(!linkInputValue === "") {
            submitButton.disabled = "false";
        }
    };
    disableEnable();

});

*/
