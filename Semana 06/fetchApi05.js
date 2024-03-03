fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then((response)=> response.json())
.then((data)=>{
    data.forEach((item)=>{
        const imgElement = document.createElement('img');
        imgElement.src = item.url;
        imgElement.width = '200';
        document.write(`<img src="${item.url}"width="200" />`)
    });
})
.catch((error)=>{
    console.error('Erro ao buscar imagens de gato:', error);
});