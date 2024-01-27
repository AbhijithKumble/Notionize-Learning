import {Client, APIErrorCode} from "@notionhq/client";

const database_ID = "9f5b362f875c45d085d5abd2326725bb";

// const linkInTitle = null;

const notion = new Client({
    // auth: `${process.env['NOTION_TOKEN']}`,
    auth: `secret_f6J2HlpsbWNSNMS08Fv7NGNUOoNHZdMrmuxWA0CzaQj`,
});

// const listUsers = async () => {
//     const listUserResponse = await notion.users.list({});  
//     console.log(listUserResponse); 
// };

const createPageInDatabase = async (textToBeStored, coverURL, title) => {
    try {
        const createPageResponse = await notion.pages.create({
            cover : {
                type: "external",
                external: {
                    url: `${coverURL}`,
                }
            },
            parent: {
                type:"database_id",
                database_id: `${database_ID}`,
            },
            properties:{
                Name: {
                    title: [
                        {
                            text:{
                                content:`${title}`,
                            },
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: "default"
                            },
                        }
                    ]
                }
            },   
            children: [
                // You can add blocks as children to the page
                {
                    object: "block",
                    paragraph: {
                        rich_text: [
                            {
                                text: {
                                    content: `${textToBeStored}`,
                                },
                            },
                        ],
                    },
                },  // Add more children blocks as needed
            ],         
        });
    console.log(createPageResponse);
    }
    catch (error){
        console.log('NO connection given');
    }
};

    // title content wiil be from youtube database i.e, youtube vieo title
    //cover url will be the youtube url 

// listUsers();

export const notionAPI = async(textToBeStored, url , title) => {
    const response = await createPageInDatabase(textToBeStored, url ,title);
    
    console.log(response);

    console.log("this is notionAPI");

    return "done";
}