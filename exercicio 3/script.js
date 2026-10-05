document.querySelector("#btnSixseven").addEventListener("click", function() {
    const nome = document.querySelector("#nomexx").value;
    document.querySelector("#mensagem").textContent = `Olá, ${nome}!`;
});
