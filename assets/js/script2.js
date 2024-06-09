
function verificarStickers() {
    // Obtener los valores de los inputs
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;
    
    // Calcular la suma total de stickers
    const totalStickers = sticker1 + sticker2 + sticker3;
    
    // Obtener el párrafo donde se mostrará el resultado
    const result = document.getElementById('result');
    
    if (totalStickers <= 10) {
        result.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        result.textContent = '¡Llevas demasiados stickers!';
    }
}
