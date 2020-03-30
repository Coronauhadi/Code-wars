
let cells = document.querySelectorAll('table#Field tr > th');

let numberOfRows = Math.ceil(Math.sqrt(cells.length));

let k = 0;

let matrix = matrixArray(numberOfRows,numberOfRows);

for(let row=0;row<numberOfRows;row++){
	for(let header=0;header<numberOfRows;header++){
		if(k>=cells.length)
			break;
		matrix[row][header] = (String(cells[k].innerText));
		k = k+1;
	}
}



//https://ru.stackoverflow.com/questions/37110/Двумерные-массивыматрицы
function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = 0;
    }
  }
  return arr;
}