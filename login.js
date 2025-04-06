function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const conta = JSON.parse(localStorage.getItem('conta_' + email));
    if (conta && conta.senha === senha) {
        localStorage.setItem('logado', email);
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}


function criarConta() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (!email || !senha) {
        alert('Preencha todos os campos.');
        return;
    }
    
    localStorage.setItem('conta_' + email, JSON.stringify({ senha }));
    alert('Conta criada com sucesso! Agora você pode entrar.');
}