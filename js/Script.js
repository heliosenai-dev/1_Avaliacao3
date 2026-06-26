const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(formDados);

     // Pegando os valores 
     let des = formData.get('des'); 
     let com = parseFloat(formData.get('com'));
     let lar = parseFloat(formData.get('lar'));

  // Cálculo 
  let are = com * lar
  let valorm = are * 550
})