const espace = document.getElementById("espace")
console.log(espace);
images = ["abbaye_de_montmartre.jpg", "Adolphe_Thiers_Nadar.jpg", "execution_lecomte.jpg", "Le_siecle.jpg", "Louise_Michel.jpg", "plaque_voiture.jpg", "telegraphe.png", "bouscarat.png"]
audios = ["lucie_abbaye.mp3", "thiers.mp3", "laura_montage_lecomte.mp3", "lucie_temoignage_le_siecle.mp3", "vali.mp3", "voiture.mp3", "telegraphe.mp3", "flo_orland.mp3"]
let zCompteur = 10

function create_piece(num) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = `url(${images[num]})`
    piece.style.left = `${Math.random() * 1000}px`;
    piece.style.top = `${Math.random() * 250}px`;
    piece.style.rotate = `${Math.random() * 360}deg`;
    espace.appendChild(piece);
    console.log(piece);

    piece.onpointerdown = function (e) {
        piece.style.zIndex = ++zCompteur
        new Audio(audios[num]).play()
        console.log("deb")
        for (let i = 0; i < 8; i++) {
            if (!audio.paused && !audio.ended) {
                console.log("arret audio");
                audio.stop()
            }
        }
    }

}
for (let i = 0; i < 8; i++) {
    console.log(images[i])
    create_piece(i)
}
