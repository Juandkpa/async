const checkAuth = function() {
    return new Promise(
        function resolve(fnResolver) {
            setTimeout( function() {
                fnResolver({isAuth: false});
            }, 2000);
        }
    );
};


const getUser = function(authStatus) {
    return new Promise(
        function (resolve, reject) {
            setTimeout( function() {                
                if(authStatus.isAuth) {
                    resolve({name: 'Max'});
                }else{
                    reject({name: 'Max'});
                }                
            }, 2000);
        }
    );
};

checkAuth()
    .then(function(authStatus) {
        return getUser(authStatus)
    })
    .then(function(user){
        console.log("Bienvenido", user.name);
    })
    .catch(function(user) {
        console.log(user.name, "no tiene permisos");
    });