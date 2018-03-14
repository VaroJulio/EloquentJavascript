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
    console.log(array.length);
    let arrayObjects = [];
    array.forEach(function(item, index){
        if (index < array.length){
            arrayObjects[index] = {value: index + 1, rest: null};
        }
    });
    for (x = arrayObjects.length -1; x > 0; x--){
        arrayObjects[x - 1].rest = arrayObjects[x];              
    }
    return arrayObjects[0];
}