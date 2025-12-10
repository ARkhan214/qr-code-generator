const qrcodeUrl = document.getElementById("qrcode_url");
const qrcoButton = document.getElementById("qrcode_button");
const qrcodeImage = document.getElementById("qr_img");

qrcoButton.addEventListener("click", async function(){

const dataUrl =await QRCode.toDataURL(qrcodeUrl.value);
console.log(dataUrl);
qrcodeImage.src = dataUrl;

});


// qrcodeButton.addEventListener("click", () => {
//     QRCode.toDataURL(qrcodeURL.value).then(dataURL => {
//         console.log(dataURL);
//         qrcodeImage.src = dataURL;
//     })
// });

