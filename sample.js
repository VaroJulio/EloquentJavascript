// Archivo con los ejercicios de Eloquent JavaScript

function reverseArray(array){
    let reverArr = [];
    for (let i=array.length-1; i>=0; i-- ) {
        reverArr.push(array[i]);
    }   
    return reverArr;
}

function reverseArrayInPlace(array){
    let reverArrInPlace = [];
    for (let i=0; i< array.length; i++) {
        reverArrInPlace.unshift(array[i]);
    }   
    return reverArrInPlace;
}

function configurarEventoBuscar(){
    $('#search').val('');
	$('#btn-search').on('click', function(e) {
		e.preventDefault();
        $('#search').animate({width: 'toggle'}).focus();
        let stringSearch = $('#search').val();
        if (stringSearch !== undefined  && stringSearch !== null && stringSearch !== ""){
            $('#myForm').submit();
        }
	});
};  

function obtenerLista(){
    let list = {
            value: 1,
            rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: null
                    }
                }
        };
    return  list;
}

function arrayToList(array){
    let arrayObjects = [];
    array.forEach(function(item, index){
        if (index < array.length){
            arrayObjects[index] = {value: item, rest: null};
        }
    });
    for (x = arrayObjects.length -1; x > 0; x--){
        arrayObjects[x - 1].rest = arrayObjects[x];              
    }
    return arrayObjects[0];
}

function listToArray(list){
    let arrResult = [];
    var bandera = true;
    do{
        if (list.value !== null)
        {
            arrResult.push(list.value);
            if (list.rest !== null){
                list = list.rest;
            }
            else{
                bandera = false;
            }
        }
    }
    while(bandera === true)
    return arrResult;
}

function prepend(item, list){
    return {value: item, rest: list}
}

function nth(list, num){
    if (!list) return undefined;
    else if (num == 0) return list.value;
    else return nth(list.rest, num - 1);
}

function filter(array, test){
    let passed = [];
    for (let element of array){
        if (test(element)){
            passed.push(element);
        }
    }
    return passed;
} 

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

var nombres = rtlScripts.map(s => s.name);

[1,2,3].reduce((a,b) => a + b);

console.log(filter(SCRIPTS, script => script.year === 1987));

var nombres = rtlScripts.map(s => s.name);

nombres.reduce((a,b) => a + b);

var arrayOfArrays = [
    ["hola", "no", "jamas"],
    ["señora", "niño", "trabajador"],
    ["excelente", "bueno", "malo", "regular", "no me importa"]    
];

function flattenArrays(arr){
    return arr.reduce((a,b) => a.concat(b));
}

class Vector {
    constructor(x,y){
        this.x= x;
        this.y=y;
    }

    get getX(){
        return this.x;
    }

    set setX(value){
        this.x=x;
    }

    get getY(){
        return this.y;
    }

    set setY(value){
        this.y=y;
    }

    plus(array){
        return [this.y + array.x, this.y + array.y];
    }

    minus(array){
        return [this.y - array.x, this.y - array.y];
    }

    get length(){
        return Math.sqrt((Math.pow(this.x,2) + Math.pow(this.y,2)));
    }
}

class Group {
    constructor(){
        this.valores = [];
    };

    has(value){
        return this.valores.includes(value);
    };

    delete(value){
        if (this.has(value)){
            let x = this.valores.indexOf(value);
            this.valores.splice(x, 1);         
        }else
        {
            console.log("No existe este valor en el grupo.");  
        }
    };

    add(value){
        if (this.has(value)){
            console.log("Ya existe este valor en el grupo."); 
        }else
        {
            this.valores.push(value);
        }
    };

    static from(array){
        let grupoEstatico = new Group();
        grupoEstatico.valores = array.map(item => item);
        return grupoEstatico;
    }
}