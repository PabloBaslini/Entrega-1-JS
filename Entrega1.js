// Variables y constantes
const materialCost = { madera: 500, metal: 700, plástico: 300 };
let totalCost = 0;

// Funciones
function solicitarDatos() {
  const material = prompt(
    "Ingrese el material para el mueble:\n- madera\n- metal\n- plástico"
  ).toLowerCase();
  const dimensiones = parseFloat(
    prompt("Ingrese las dimensiones del mueble en m² (ejemplo: 2.5):")
  );
  const cantidad = parseInt(
    prompt("Ingrese la cantidad de muebles:")
  );

  if (materialCost[material] && dimensiones > 0 && cantidad > 0) {
    return { material, dimensiones, cantidad };
  } else {
    alert("Datos inválidos. Intente de nuevo.");
    return null;
  }
}

function calcularCosto({ material, dimensiones, cantidad }) {
  const costoMaterial = materialCost[material];
  totalCost = costoMaterial * dimensiones * cantidad;
}

function mostrarResultado() {
  alert(`El costo total estimado es: $${totalCost.toFixed(2)}`);
  console.log("Costo detallado:");
  console.log(`Costo por unidad: $${(totalCost / cantidad).toFixed(2)}`);
}

// Lógica principal
function simulador() {
  const datos = solicitarDatos();
  if (datos) {
    calcularCosto(datos);
    mostrarResultado();
  } else {
    alert("No se pudo calcular el costo. Inténtelo nuevamente.");
  }
}

// Llamada al simulador
simulador();
