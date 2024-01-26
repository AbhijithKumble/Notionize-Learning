const {Client, APIErrorCode} = require("@notionhq/client");
const {config} = require("dotenv");

config();

const notion = new Client({
    auth: `${process.env['NOTION_TOKEN']}`,
});

const listUsers = async () => {
    const listUserResponse = await notion.users.list({});  
    console.log(listUserResponse); 
};

const coverURL = "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg";
const database_ID = "9f5b362f875c45d085d5abd2326725bb";
const titleText = "Hello this is testing";
const linkInTitle = null;

const createPageInDatabase = async () => {
    try {const createPageResponse = await notion.pages.create({
        "cover" : {
            "type": "external",
            "external": {
                "url": coverURL,
            }
        },
        "parent": {
            "type":"database_id",
            "database_id": database_ID,
        },
        "properties":{
           "title": {
            "id": "title",
            "type": "title" ,
            "title": [
                {
                    "type":"text",
                    "text":{
                        "content":titleText,
                        "link": linkInTitle,
                    },
                    "annotations": {
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "code": false,
                        "color": "default"
                    },
                }
            ]
           },            
    }
    });
    console.log(createPageResponse);
    }
    catch (error){
        //console.log('NO connection given');
    }


};

// title content wiil be from youtube database i.e, youtube vieo title
//cover url will be the youtube url 


listUsers();
createPageInDatabase();


const main = (url) => {
    console.log(url);
};



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

export default main ;