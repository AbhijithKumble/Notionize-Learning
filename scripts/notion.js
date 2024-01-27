// const {Client, APIErrorCode} = require("@notionhq/client");
// const {config} = require("dotenv");

// config();


// const coverURL = "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg";
// const database_ID = "9f5b362f875c45d085d5abd2326725bb";
// const titleText = "Hello this is testing";     // youtube thumbnail

// const linkInTitle = null;

// const notion = new Client({
//     auth: `${process.env['NOTION_TOKEN']}`,
// });

// const listUsers = async () => {
//     const listUserResponse = await notion.users.list({});  
//     console.log(listUserResponse); 
// };



// const createPageInDatabase = async () => {
//     try {const createPageResponse = await notion.pages.create({
//         "cover" : {
//             "type": "external",
//             "external": {
//                 "url": coverURL,
//             }
//         },
//         "parent": {
//             "type":"database_id",
//             "database_id": database_ID,
//         },
//         "properties":{
//            "title": {
//             "id": "title",
//             "type": "title" ,
//             "title": [
//                 {
//                     "type":"text",
//                     "text":{
//                         "content":titleText,
//                         "link": linkInTitle,
//                     },
//                     "annotations": {
//                         "bold": false,
//                         "italic": false,
//                         "strikethrough": false,
//                         "underline": false,
//                         "code": false,
//                         "color": "default"
//                     },
//                 }
//             ]
//            },            
//     }
//     });
//     console.log(createPageResponse);
//     }
//     catch (error){
//         //console.log('NO connection given');
//     }


// };

// // title content wiil be from youtube database i.e, youtube vieo title
// //cover url will be the youtube url 


// listUsers();
// createPageInDatabase();


export const notionAPI = async(textToBeStored) => {

    console.log("this is notionAPI");

    return "done";
}