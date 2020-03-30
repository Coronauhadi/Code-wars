//REQUIRES IMPLEMENTATION
let botProgram = ''

let executeList = []
let botExecList = parseBotProgram(botProgram)
let userExecList = []

/*
	пример хеллоу ворлд:
	а нету никакого примера хеллоу ворлд
	
	Программа разделяется '\n' - символами. В случае, если строчка не поддается интерпретации, программа выполнит первую из команд.
	
	Основные команды:
	пвтор(x) <- следующая строчка будет повторена х раз
	длшаг() < - делает шаг в направлении, куда смотрит персонаж
	встрл(х,у) < - выстреливает в координату (х ; y)
	пврот(направление) < - поворачивается в направлении. Направление может быть: 'влево' 'вправо'
	ждать(х) < - ждёт х шагов
*/

function parseUserProgram(userProgram){	
	//calls by an event
	userExecList = interpretateList(userProgram.split('\n'))
}

function parseBotProgram(){
	return interpretateList(botProgram.split('\n'))
}


// TODO:
function interpretateList(pseudoExecList){
	for(let i=0; i < pseudoLangExecList.length; i++){
		let command = pseudoExecList[i].substring(0,4)
		switch (command){
			case 'пвтор':
			
			let repeatCommand = pseudoExecList[i+1}.substring(0,4)
			break;
			
			case 'длшаг':
				
			break;
			
			case 'встрл':
			
			break;
			
			case 'пврот':
			
			break;
			
			case 'ждать':
			
			break;
			
			default: break;
		}
	}
}