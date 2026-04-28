const espace = document.getElementById("espace")
console.log(espace);
images = ["abbaye_de_montmartre.jpg", "Adolphe_Thiers_Nadar.jpg", "execution_lecomte.jpg", "Le_siecle.jpg", "Louise_Michel.jpg", "plaque_voiture.jpg", "telegraphe.png", "bouscarat.png"]
audios = ["abbaye royale Montmartre.mp3", "thiers.mp3", "lecomte.mp3", "siecle.mp3", "michel.mp3", "voiture.mp3", "telegraphe.mp3", "bouscarat.mp3"]
let zCompteur = 0

function create_piece(num) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = `url(${images[num]})` //"url(Adolphe_Thiers_Nadar.jpg)";
    piece.style.left = `${Math.random() * 1000}px`;
    piece.style.top = `${Math.random() * 250}px`;
    piece.style.rotate = `${Math.random() * 360}deg`;
    espace.appendChild(piece);
    console.log(piece);

    piece.onpointerdown = function (e) {
        piece.style.zIndex = ++zCompteur
        //piece.style.border = "3px solid green"
        new Audio(audios[num]).play()
    }

    //piece.onpointerup = function (e) {
    //piece.style.border = "1px solid black"
    //}
}
for (let i = 0; i < 8; i++) {
    console.log(images[i])
    create_piece(i)
}
