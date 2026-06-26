const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (e) => {
    e.preventDefault();



     // Pegando os valores 
     let des = document.getElementById("des").value;
     let com = document.getElementById("com").value;
     let lar = document.getElementById("lar").value;
     

  // Cálculo 
  let are = com * lar
  let valorm = are * 550

  if (valorm >=100.0000) {
    divResultado.innerHTML = `Valor Adicional é de 20%`;
} else if (valorm <= 20.000) {
    divResultado.innerHTML = `Valor Adicional é de 5%`;
} else if (valorm >= 100.0000 && valorm < 500.000) {
    divResultado.innerHTML = `Valor Adicional é de 10% `;
} else if (valorm >= 500.00 && valorm <= 1000.0000) {
    divResultado.innerHTML = `Valor Adicional é de 15% `;
} else {
    divResultado.innerHTML = `Isento`
}

let item = document.createElement("div");
        item.className = "item";

item.innerHTML = `
            <p><b>Descrição do lote:</b> ${des}</p>
            <p><b>Comprimento:</b> ${com}</p>
            <p><b>Largura:</b> ${lar}</p>
            <p><b>Área (m2):</b> ${are}</p>
            <p><b>Valor do lote :</b> R$ ${valorm.toFixed(2)}</p>
       `;

       resultado.appendChild(item);
       form.reset();
})
