const main = () => {
    console.log("this is main and working");




};



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