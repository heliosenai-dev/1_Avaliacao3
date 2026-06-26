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

  if (valorm <= 20.000) {
    divResultado.innerHTML = `Isento ${valorm.toFixed(2)})`;
} else if (valorm >= 20.000 && valorm < 100.000) {
    divResultado.innerHTML = `Valor Adicional é de 5%${toFixed(2)})`;
} else if (valorm >= 100.000 && valorm < 500.000) {
    divResultado.innerHTML = `Valor Adicional é de 10% ${toFixed(2)})`;
} else if (valorm >= 500.00 && valorm <= 1000.000) {
    divResultado.innerHTML = `Valor Adicional é de 15% ${toFixed(2)})`;
} else {valorm > 1000.000
    divResultado.innerHTML = `Valor Adicional é de 20%  ${toFixed(2)})`;
}

item.innerHTML = `
            <p><b>Descrição do lote:</b> ${des}</p>
            <p><b>Comprimento:</b> ${com}</p>
            <p><b>Largura:</b> ${lar}</p>
            <p><b>Área (m2):</b> ${are}</p>
            <p><b>Valor do lote :</b> R$ ${valorm.toFixed(2)}</p>
       `
       
})
