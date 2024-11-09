function salvarDados() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    

    const dadosUsuario = {
        nome: nome,
        email: email
    };

    // Envia os dados para o servidor
    fetch("http://localhost:3000/salvar-dados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosUsuario)
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro ao salvar dados");
        return response.text();
    })
    .then(mensagem => {
        console.log(mensagem);
        document.getElementById("jsonDados").textContent = JSON.stringify(dadosUsuario, null, 2);
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}