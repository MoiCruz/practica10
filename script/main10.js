const archivo = document.querySelector(`#archivo`)
fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((completo) => completo.json())
  .then((dataBase) => registros(dataBase))

function registros(dataBase){
  archivo.innerHTML = ""
  dataBase.forEach(element => {
    const person_template = `
      <div class="card border-dark">
          <div class="card">
                <h3 class="card-title">Nombre:${element.name}</h3>
                <p class="card-text">Usuario:${element.username}</p>
                <p class="card-text">Email:${element.email}</p>
                <p class="card-text">Empresa:${element.company.name}</p>
           </div>
        </div>
     `
    archivo.innerHTML += person_template
    
});
}






