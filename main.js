function enviar(event) {
    event.preventDefault();
    
    const cliente = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        serviço: document.getElementsByTagName("serviço").value
    }
    JSON.stringify(cliente)
    alert(`Usuário Cadastrado! Entraremos em contato em breve ${cliente.nome}`)
}