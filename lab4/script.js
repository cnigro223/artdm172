function exImg(imgs) {
    var expandImg = document.getElementById("proportions");
    var imgText = document.getElementById("imagechoice");

    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
