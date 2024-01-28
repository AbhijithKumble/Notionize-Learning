import { config } from "dotenv";
config();

const createSummary = async(url, data) => {
    const response = await fetch( url, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
    },
        body: JSON.stringify(data)
    });

    let body;

    try {
        body = await response.json();
    } catch(error) {
        throw error;

    }
    console.log(body)
    const summarisedText = body.candidates[0].content.parts;
    return (summarisedText);
};

export const summariser = async(transcript) => {
    //prompt
    const textToBeSummarised = `
    Task: Summarize the provided transcript into key points and organize them into an array of strings.
    ${transcript} 
    Instructions:

    1. Read the transcript thoroughly.
    2. Extract the main points from the transcript.
    3. Summarize each point concisely.
    4. Organize the points into an array of strings.
    5. Ensure each string in the array represents a single key point.
    6. Avoid including unnecessary details.
    7. Focus on the most important information conveyed in the video.
    `;

    let data = {
        "contents": [
            {
                "parts": [{
                    "text": textToBeSummarised
                }]
            }
        ]
    };

    const GOOGLE_AI_KEY ="AIzaSyDF361lZ9OTNfV6-HHyRLH4_w1BmYAlX1k"

    // const GOOGLE_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env['GOOGLE_AI_KEY']}`;

    const GOOGLE_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GOOGLE_AI_KEY}`;

    const summarisedTranscript = await createSummary(GOOGLE_API_URL,data); 

    return summarisedTranscript;
};

