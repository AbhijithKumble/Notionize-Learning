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
    const summarisedText = body.candidates[0].content.parts;
    return (summarisedText);
};

export const summariser = async(transcript) => {
    //prompt
    const textToBeSummarised = `${transcript} -> Summarise this video and put it in the form of bullet points`;

    let data = {
        "contents": [
            {
                "parts": [{
                    "text": textToBeSummarised
                }]
            }
        ]
    };

    const GOOGLE_AI_KEY ="AIzaSyBQ1mk-bcAeW8qBjAKo5srmMWPFsExDXvY"

    // const GOOGLE_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env['GOOGLE_AI_KEY']}`;

    const GOOGLE_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GOOGLE_AI_KEY}`;

    const summarisedTranscript = await createSummary(GOOGLE_API_URL,data); 

    return summarisedTranscript;
};

