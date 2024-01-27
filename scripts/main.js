import getTranscript from "./youtube.transcript";
import URL from "url"

const main = (url) => {
    console.log(url);

    // get the transcript from youtube-transcript.py
    // const URL = new URL(url);
    // const videoId = URL.searchParameters.get('v');
    // console.log(videoId);
    // getTranscript(videoId)
    //     .then(transcript => {
    //         console.log('Transcript : ', transcript);
    //     })
    //     .catch(error => {
    //         console.error('Error getting transcript: ', error );
    //     });  


    // summarise using google ai 
    //store in notion database given by the user 
    
};

export default main;
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
