let nome = document.querySelector('#nome');
let job = document.querySelector('#job');
let form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let dados = {
        nome: nome.value,
        job: job.value
    };

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        alert("ok cadastro com sucesso")
    })

})

