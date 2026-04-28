const espace = document.getElementById("espace")
console.log(espace);
images = ["abbaye_de_montmartre.jpg", "Adolphe_Thiers_Nadar.jpg", "execution_lecomte.jpg", "Le_siecle.jpg", "Louise_Michel.jpg", "plaque_voiture.jpg"]
let zCompteur = 0

function create_piece(image) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = `url(${image})` //"url(Adolphe_Thiers_Nadar.jpg)";
    piece.style.left = `${Math.random() * 1000}px`;
    piece.style.top = `${Math.random() * 250}px`;
    piece.style.rotate = `${Math.random() * 360}deg`;
    espace.appendChild(piece);
    console.log(piece);

    piece.onpointerdown = function (e) {
        piece.style.zIndex = ++zCompteur
        piece.style.border = "3px solid green"
    }
    piece.onpointerup = function (e) {
        piece.style.border = "1px solid black"
    }
}
for (img in images) {
    console.log(images[img])
    create_piece(images[img])
}
