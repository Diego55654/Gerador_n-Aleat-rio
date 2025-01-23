let x, y, z;

document.getElementById("random").onclick = function() {
    // Gera números aleatórios entre 0 e 9 para cada variável
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    z = Math.floor(Math.random() * 10);

    // Atualiza os elementos de label com os números gerados
    document.getElementById("numero1").innerHTML = x;
    document.getElementById("numero2").innerHTML = y;
    document.getElementById("numero3").innerHTML = z;
}
