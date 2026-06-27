const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (e) => {
    e.preventDefault();

    let des = document.getElementById("des").value;
    let com = Number(document.getElementById("com").value);
    let lar = Number(document.getElementById("lar").value);

     //Cálculo
    let are = com * lar;
    let valorm = are * 550; 
//inseção
    let ad = 0;
    let taxaPercentual = "Isento"; 

    // Se e Se não
    if (valorm > 1000000) {
        ad = valorm * 0.20;
        taxaPercentual = "20%";
    } else if (valorm > 500000) {
        ad = valorm * 0.15;
        taxaPercentual = "15%";
    } else if (valorm > 100000) {
        ad = valorm * 0.10;
        taxaPercentual = "10%";
    } else if (valorm > 20000) {
        ad = valorm * 0.05;
        taxaPercentual = "5%";
    } else {
        ad = 0;
        taxaPercentual = "Isento";
    }

    // texto do valor adicional em dinheiro
    let textoAdicionalDinheiro = ad > 0 ? `R$ ${ad.toFixed(2)}` : "R$ 0,00";

    let item = document.createElement("div");
    item.className = "item";

    let valorTotal = valorm + ad;
// Impressão
    item.innerHTML = `
        <p><b>Descrição do lote:</b> ${des}</p>
        <p><b>Comprimento:</b> ${com} m</p>
        <p><b>Largura:</b> ${lar} m</p>
        <p><b>Área (m²):</b> ${are.toFixed(2)}</p>
        <p><b>Valor Base:</b> R$ ${valorm.toFixed(2)}</p>
        <p><b>Taxa do Adicional:</b> ${taxaPercentual}</p>
        <p><b>Valor do Adicional:</b> ${textoAdicionalDinheiro}</p>
        <p><b>Valor Total do lote:</b> R$ ${valorTotal.toFixed(2)}</p>
    `;

    divResultado.appendChild(item);
    formDados.reset();
});