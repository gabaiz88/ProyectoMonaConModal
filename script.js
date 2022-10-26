// let opcion;
// const TAMANIO_HARINA = 500;
// const CANT_HUEVOS = 30;
// const TAMANIO_LECHE = 1000;
// const TAMANIO_MANTECA = 500;
// const TAMANIO_AZUCAR = 500;
// const TAMANIO_MEMBRILLO = 500;
// const TAMANIO_CHOCOLATE = 1000;
// let arrayProductos = ["Harina", "Manteca", "Huevos", "Leche", "Azucar", "Chocolate", "Membrillo", "Limones", "Zanahorias"];
// let array = [9];

// do {
//     ingresarPrecioDeIngredientes();
//     opcion = parseInt(prompt("\t\tQue torta va a cocinar?\t\t\n1-Pastafrola\n2-Brownie\n3-LemonPie\n4-CarrotCake\n5-Salir\nIngrese un numero entre 1 y 5")
//   );
// } while (opcion < 1 || opcion > 5);
// while (opcion != 5) {
//   switch (opcion) {
//     case 1:
//       ingredientes = ingresarIngredientesPorTorta(opcion);
//       costo = calcularCosto(ingredientes.cantHarina,ingredientes.cantLeche,ingredientes.cantHuevos,ingredientes.cantManteca,ingredientes.cantAzucar);
//       costo += (ingredientes.cantMembrillo / TAMANIO_MEMBRILLO) * array[6];
//       alert(`Costo de la pastafrola: ${costo}`);
//       break;
//     case 2:
//       ingredientes = ingresarIngredientesPorTorta(opcion);
//       costo = calcularCosto(ingredientes.cantHarina,ingredientes.cantLeche,ingredientes.cantHuevos,ingredientes.cantManteca,ingredientes.cantAzucar);
//       costo += (ingredientes.cantChocolate / TAMANIO_CHOCOLATE) * array[5];
//       alert(`Costo del Browie: ${costo}`);
//       break;
//     case 3:
//       ingredientes = ingresarIngredientesPorTorta(opcion);
//       costo = calcularCosto(ingredientes.cantHarina,ingredientes.cantLeche,ingredientes.cantHuevos,ingredientes.cantManteca,ingredientes.cantAzucar);
//       costo += (ingredientes.cantLimones * array[7]);
//       alert(`Costo del LemonPie: ${costo}`);
//       break;
//     case 4:
//       ingredientes = ingresarIngredientesPorTorta(opcion);
//       costo = calcularCosto(ingredientes.cantHarina,ingredientes.cantLeche,ingredientes.cantHuevos,ingredientes.cantManteca,ingredientes.cantAzucar);
//       costo += (ingredientes.cantZanahorias * array[8]);
//       alert(`Costo de Carrot Cake: ${costo}`);
//       break;
//     default:
//       alert("Opcion incorrecta");
//       break;
//   }
//   do {
//     opcion = parseInt(
//       prompt(
//         "\t\tQue torta va a cocinar?\t\t\n1-Pastafrola\n2-Brownie\n3-Lemonpie\n4-CarrotCake\n5-Salir\nIngrese un numero entre 1 y 5"
//       )
//     );
//   } while (opcion < 1 || opcion > 5);
// }
// alert("Programa finalizado");

// function calcularCosto(cantHarina,cantLeche,cantHuevos,cantManteca,cantAzucar) {
//   let costo = 0;
//   costo += (cantHarina / TAMANIO_HARINA) * array[0];
//   costo += (cantLeche / TAMANIO_LECHE) * array[3];
//   costo += (cantHuevos / CANT_HUEVOS) * array[2];
//   costo += (cantManteca / TAMANIO_MANTECA) * array[1];
//   costo += (cantAzucar / TAMANIO_AZUCAR) * array[4];
//   return costo;
// }

// function ingresarIngredientesPorTorta() {
//     // let cantMembrillo = 0;
//     // let cantChocolate = 0;
//     // let cantLimones = 0;
//     // let cantZanahorias = 0;
//     // alert("Ingrese las cantidades en GRs o CM3 segun corresponda.")
//     let cantHarina = document.getElementById(harina);
//     let cantLeche = document.getElementById(leche);
//     let cantHuevos = document.getElementById(huevos);
//     // let cantAzucar = prompt("Ingresa Cuanto necesitas de Azucar: ");
//     // let cantManteca = prompt("Ingresa Cuanto necesitas de Manteca: ");
//     // if (opcion === 1){
//     //     cantMembrillo = prompt("Ingresa Cuanto necesitas de Membrillo: ");
//     // } else if (opcion === 2){
//     //     cantChocolate = prompt("Ingresa cuanto necesitas de Chocolate: ");
//     // } else if (opcion === 3){
//     //     cantLimones = prompt("Ingrese cuantos limones necesita: ");
//     // } else if (opcion === 4){
//     //     cantZanahorias = prompt("Ingrese cuantos zanahorias necesita: ");
//     // }
//     // return { cantHarina, cantLeche, cantHuevos, cantManteca, cantAzucar, cantMembrillo, cantChocolate, cantLimones, cantZanahorias };
//     return { cantHarina, cantHuevos, cantLeche }
// }

// function ingresarPrecioDeIngredientes() {
//     for (let i = 0; i < arrayProductos.length; i++){
//         array[i] = prompt(`Ingrese el precio para el articulo ${arrayProductos[i]}`)
//         console.log(array[i]);
//     }
// }
  const TAMANIO_HARINA = 500;
  const CANT_HUEVOS = 30;
  const TAMANIO_LECHE = 1000;
  const TAMANIO_MANTECA = 500;
  const TAMANIO_AZUCAR = 500;
  const TAMANIO_MEMBRILLO = 500;
  const TAMANIO_CHOCOLATE = 1000;

  function guardarPrecios(){
  let precioHarina  = parseFloat(document.getElementById("harina").value);
  let precioLeche = parseFloat(document.getElementById("leche").value);
  let precioHuevos = parseFloat(document.getElementById("huevos").value);
  let precioManteca = parseFloat(document.getElementById("manteca").value);
  let precioAzucar = parseFloat(document.getElementById("azucar").value);
  let precioChocolate = parseFloat(document.getElementById("chocolate").value);
  let precioMembrillo = parseFloat(document.getElementById("membrillo").value);
  let precioLimon = parseFloat(document.getElementById("limon").value);
  let precioZanahoria = parseFloat(document.getElementById("zanahoria").value);
  return { precioHarina, precioLeche, precioHuevos, precioManteca, precioAzucar, precioChocolate, precioMembrillo, precioLimon, precioZanahoria }
}

function calcularCosto(){
  let precios = guardarPrecios();
  let r = 0;
  let cantHarina  = parseFloat(document.getElementById("cantHarina").value);
  let cantLeche = parseFloat(document.getElementById("cantLeche").value);
  let cantHuevos = parseFloat(document.getElementById("cantHuevos").value);
  let cantAzucar = parseFloat(document.getElementById("cantAzucar").value);
  let cantManteca = parseFloat(document.getElementById("cantManteca").value);
  let cantChocolate = parseFloat(document.getElementById("cantChocolate").value);
  let cantMembrillo = parseFloat(document.getElementById("cantMembrillo").value);
  let cantLimon = parseFloat(document.getElementById("cantLimon").value);
  let cantZanahoria = parseFloat(document.getElementById("cantZanahoria").value);
  r += (cantHarina / TAMANIO_HARINA) * precios.precioHarina;
  r += (cantLeche / TAMANIO_LECHE) * precios.precioLeche;
  r += (cantHuevos / CANT_HUEVOS) * precios.precioHuevos;
  r += (cantManteca / TAMANIO_MANTECA) * precios.precioManteca;
  r += (cantAzucar / TAMANIO_AZUCAR) * precios.precioAzucar;
  r += (cantChocolate / TAMANIO_CHOCOLATE) * precios.precioChocolate;
  r += (cantLimon * precios.precioLimon);
  r += (cantMembrillo / TAMANIO_MEMBRILLO) * precios.precioMembrillo;
  r += (cantZanahoria * precios.precioZanahoria);
  parseFloat(r);
  console.log(r);
  document.querySelector('#r').innerHTML = r;
}