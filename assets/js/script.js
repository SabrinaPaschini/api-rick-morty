console.log('sucesso!');

//requisição 

fetch('https://rickandmortyapi.com/api/character')

    //Peguei a requisisão e transforma em json 

    .then(Response => (Response.json()))
    .then((json) => {

        let container = document.querySelector('.container');



        //manipular array, usando a funcao .map, adiciona itens criando um novo array modificado 


        //pegar o resultado e colocar dentro do html , usando a classe

        json.results.map((results) => {

            container.innerHTML += `
        
     

    <section class="allIn">
    
    <p class="idEname">${results.id}: ${results.name} </p>
    
    <ul>
    <li class="listaDeItens">Espécie: ${results.species}</li>
    <li class="listaDeItens">Status: ${results.status}</li>
    <li class="listaDeItens">Gênero: ${results.gender}</li>
    <li class="listaDeItens">${''}</li>
    <li class="listaDeItens"> ${""}</li>
    </ul>
    
    <div>
        <img class="imagemDeles" src="${results.image}">
    </div>
</section>

        `
        })

    })

