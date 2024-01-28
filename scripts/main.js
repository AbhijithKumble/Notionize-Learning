import getTranscript from "./youtube.transcript.js";
import { summariser } from "./google.ai.js";
import { notionAPI } from "./notion.js";


const main = async (youtubeLinkValue) => {
    const url = new URL(youtubeLinkValue);
    const videoId = url.searchParams.get('v');
    
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
    const responseFromGoogleAI = await summariser(transcriptToSummarise);
    console.log(responseFromGoogleAI);  

    //get the title
    let title;
    const apiUrl = 'https://www.youtube.com/watch?v=' + videoId;
    await fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(data, 'text/html');
          const titleElement = htmlDoc.querySelector('title');
          title = titleElement.textContent ?  titleElement.textContent: "testing";
        })
        .catch(error => {
          console.error('Error fetching video data:', error);
        });



    // console.log(responseFromGoogleAI);
    //store in notion database given by the user 

    const responseFromNotion = await notionAPI(responseFromGoogleAI,youtubeLinkValue,title);
    
};

main("https://www.youtube.com/watch?v=1FbXo7KbMKE");

// export default main;