//callbacks
const getUser = function(fnCallback) { //function passed as an argument
    setTimeout(function(){
        fnCallback({name: 'max'});
    }, 2000);
};

getUser(
    function(user) {
        console.log(user.name);
    }
);

// Alternatively, use a named function:
const handleUser = function(user){
    console.log("user handled :> ", user.name);
}
getUser(handleUser);
//la ejecución del código no para mientras espera que se ejecute el temporizador.
console.log('Se imprime antes de que "max" sea imprimido!');

