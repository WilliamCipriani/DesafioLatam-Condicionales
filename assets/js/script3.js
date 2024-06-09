function verificarPassword() {
    // Obtener los valores de los select
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    
    // Concatenar los valores para formar el password
    const password = digit1 + digit2 + digit3;
    
    // Obtener el párrafo donde se mostrará el resultado
    const resultado = document.getElementById('resultado');
    
    // Verificar el password y actualizar el mensaje
    if (password === '911') {
        resultado.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultado.textContent = 'Password 2 correcto';
    } else {
        resultado.textContent = 'Password incorrecto';
    }
}