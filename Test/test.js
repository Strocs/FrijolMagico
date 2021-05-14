const main = document.getElementsByClassName('main')[0]

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

(function printSquare() {
  let dataArr = dataArray(0, data);

  for (let i=0; i < dataArr.length; i++) {
    main.appendChild(createSquare(dataArr[i]))
  }
})();


// EVENTOS







