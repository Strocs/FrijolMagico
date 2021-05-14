const main = document.getElementsByClassName('main')[0]
main.style.marginLeft = `-200px`;

// 12 DATOS
const data = [
  'red', 
  'blue', 
  'green', 
  'yellow', 
  'orange',
  'pink',
  'black',
  'magenta',
  'white',
  'brown',
  'grey',
  'tomato', 
]

// CREACION DEL ELEMENTO
const createSquare = (color) => {
  let div = document.createElement('div')
  div.style.height = '200px'
  div.style.width = '200px'
  div.style.backgroundColor = color
  div.innerText = color
  return div;
};

const dataArray = (current, dataInfo) => {
  let y = current, z = 0, x = 0;

  y === (dataInfo.length - 1) ? z = 0 : z = y+1
  y === 0 ? x = (dataInfo.length - 1) : x = y-1

  return [data[x], data[y], data[z]];
};

//TODO: CAMBIAR PRINT SQUARE PARA QUE MANTENGA EL CURRENT Y ELMINE EL ANTERIOR Y AGREGUE EL SIGUIENTE
const printSquare = (current) => {
  let dataArr = dataArray(current, data);

  for (let i=0; i < dataArr.length; i++) {
    main.appendChild(createSquare(dataArr[i]))
  }
}

let initialSquare = 0;
printSquare(initialSquare)

// EVENTOS

//TODO: SIMPLIFICAR FUNCIONES, UNIR EN UNA SOLA FUNCION LOS EVENTOS PREV Y NEXT
// FINALIZAR MOVESQUARE Y HACER QUE MUEVA EL MARGIN Y LUEGO CAMBIE VALORES

document.getElementsByClassName('prev')[0].addEventListener('click', function(){
  // let margin = 0
  let current = 0
  printSquare(current++)
  // main.style.marginLeft = `-${margin}px`;
})

document.getElementsByClassName('next')[0].addEventListener('click', function(){
  // let margin = 400
  let current = 0
  printSquare(current--)
  // main.style.marginLeft = `-${margin}px`;
})


const moveSquare = () => {
  let margin = 0
  main.style.marginLeft = `-${margin}px`;
}