//selecciones ppales del DOM
const btnCambiarColor=document.getElementById('btnCambiarColor');
const titulo=document.querySelector("h1");

const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const textoModificable  = document.getElementById("textoModificable");

const btnToogleClassCss = document.getElementById("btnToogleClaseCss");
const cuadro = document.getElementById("cuadro");

const btnAgregarElementoList = document.getElementById("btnAgregarElementos");
const listaDinamica =document.getElementById("listaDinamica");

const btnEliminarElementos = document.getElementById("btnEliminarElementos");

///cambiar el color del titulo al hacer click en el boton
/*addEventListener = escucha el evento click
style directament
*/
btnCambiarColor.addEventListener("click",()=>{
    titulo.style.color=titulo.style.color==="#ffffffff"? "white":"#1a025aff";
});

////cambiar texto de mi seccion
btnCambiarTexto.addEventListener("click",()=>{
           textoModificable.textContent= "Hola mundo desde JS:5 DevSenior";

});

//cambiar el color de la cajita
btnToogleClassCss.addEventListener("click",()=>{
    ///añade o quita la clase activo,  al momento de dar click
    cuadro.classList.toggle("activo")
});

let contador =1;
btnAgregarElementoList.addEventListener("click",()=>{
    const li =document.createElement("li");
    //asiganar contenido y aumenta contador
    li.textContent=`Elemento creado #${contador++}`;

    ///agregar al final de la lista un appendchild
    listaDinamica.appendChild(li);
});

//eleiminar el ultimo elemnto de la lista
btnEliminarElementos.addEventListener("click",()=>{
    //elimina el ultimo hijo de la lista
    listaDinamica.removeChild(listaDinamica.lastElementChild);
});
//*================================================*/
/*CALCULADORA BASICA CON JS*/
/*=================================================*/   
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const btnCalcular = document.getElementById("btnCalcular");
const resultadoEl = document.getElementById("resultadoCal");

// Escuchamos eventos para calcular
btnCalcular.addEventListener("click", () => {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    const op = operacion.value; // valores: "sumar","restar","multiplicar","dividir"

    // resetea estilo
    resultadoEl.style.color = "black";

    // validación de entradas
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        resultadoEl.textContent = "Por favor ingrese números válidos.";
        resultadoEl.style.color = "red";
        return;
    }

    let res;
    switch (op) {
        case "sumar":
            res = n1 + n2;
            break;
        case "restar":
            res = n1 - n2;
            break;
        case "multiplicar":
            res = n1 * n2;
            break;
        case "dividir":
            if (n2 === 0) {
                resultadoEl.textContent = "Error: División por cero.";
                resultadoEl.style.color = "red";
                return;
            }
            res = n1 / n2;
            break;
        default:
            resultadoEl.textContent = "Operación no válida.";
            resultadoEl.style.color = "red";
            return;
    }

    resultadoEl.textContent = `Resultado: ${res}`;
});

   