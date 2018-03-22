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

