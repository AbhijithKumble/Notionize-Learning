import { Client } from "@notionhq/client";

const database_ID = "9f5b362f875c45d085d5abd2326725bb";

const notion = new Client({
    // auth: `${process.env['NOTION_TOKEN']}`,
    auth: `secret_f6J2HlpsbWNSNMS08Fv7NGNUOoNHZdMrmuxWA0CzaQj`,
});

const createPageInDatabase = async (children, coverURL, title) => {
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
            children: children,         
        });
    console.log(createPageResponse);
    }
    catch (error){
        console.log('NO connection given');
    }

    return {
        statusCode : 200,
        message : "successfully stored in notion"
    };
};

    // title content wiil be from youtube database i.e, youtube vieo title
    //cover url will be the youtube url 

// listUsers();

const createBulletListPage = async (items) => {
    const children = items.map(item => {
      return {
        object: "block",
        bulleted_list_item: {
          rich_text: [
            {
              text: {
                content: item,
              },
            },
          ],
        },
      };
    });

    return children;
};


export const notionAPI = async(textToBeStored, url , title) => {
    const highlights = textToBeStored[0].text.split("\n").map((item) => item.trim().replace(/^- /, ""));

    const children = await createBulletListPage(highlights);    

    const response = await createPageInDatabase(children, url ,title);
    
    console.log(`this is a response from notion ai ${response}`);

    console.log("this is notionAPI");

    return "done";
}

