const container = document.querySelector(".main");
const btn = document.querySelector(".submit");
const qrInput = document.querySelector(".data");
const qrImg = document.querySelector("#img");

btn.onclick = function () {
    if (qrInput.value.length > 0) {
        btn.innerText = "generating QR Code..."
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=165x165&data="
            + qrInput.value;
        qrImg.onload = function () {
            container.classList.add("active");
            btn.innerText = "generate QR Code";
        }
    }
}
