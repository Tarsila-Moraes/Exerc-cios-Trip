function getUserInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = {
          nome: "Tarsila",
          idade: "36",
          email: "tarsilamoraes87@icloud.com",
        };
        resolve(user);
      }, 2000);
    });
  }
  
  async function playGetUser() {
    try {
      let retorno = await getUserInfo();
      console.log(retorno);
    } catch (erro) {
      console.error("Oops, algo deu errado!", erro);
    }
  }
  
  playGetUser();
  

