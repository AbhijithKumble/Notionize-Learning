import { config } from "dot-env";
config();


const GOOGLE_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env['GOOGLE_AI_KEY']}` 
// demo link 
let youtubeVideoLink = "https://www.youtube.com/watch?v=x-hGIYZj2Rw";
//prompt
let toSummaryText = `${youtubeVideoLink} -> Summarise this video and put it in the form of bullet points`;

let data = {
    "contents": [
        {
            "parts": [{
                "text": toSummaryText
            }]
        }
    ]
};

const createSummary = async(url) => {
    try { 
        const response = await fetch( url, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
        });

        const respData = await response.json();
        console.log(respData.candidates[0].content.parts);
        

    } catch(error) {
        console.log(error);
        return;
    }
};

// createSummary(url);