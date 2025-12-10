const qrcodeUrl = document.getElementById("qrcode_url");
const qrcoButton = document.getElementById("qrcode_button");
const qrcodeImage = document.getElementById("qr_img");

qrcoButton.addEventListener("click", async function () {

    const dataUrl = await QRCode.toDataURL(qrcodeUrl.value);
    console.log(dataUrl);
    qrcodeImage.src = dataUrl;

});


// Download QR Code png=======================================================================
const downloadBtn = document.getElementById("download_btn");

qrcoButton.addEventListener("click", async function () {
    const dataUrl = await QRCode.toDataURL(qrcodeUrl.value);

    qrcodeImage.src = dataUrl;

    downloadBtn.style.display = "block"; // show download button
    downloadBtn.setAttribute("data-url", dataUrl); // store url
});

downloadBtn.addEventListener("click", function () {
    const url = downloadBtn.getAttribute("data-url");

    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
});
