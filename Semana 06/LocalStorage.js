function getUserInfo(){
    const user = {}
    
    user.nome = prompt('Digite seu nome:');
    user.idade = parseInt(prompt('Digite sua idade:'));
    user.email = prompt('Digite seu email:');

    if (!user.nome || !user.idade || !user.email){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    console.log('Usuário salvo no LocalStorage', user);
}

getUserInfo();