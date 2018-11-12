const checkAuth = function(fnCallback) {
    //simula una petición al servidor
    setTimeout(function() {
        fnCallback({isAuth: true});
    }, 2000);
};

const getUser = function(authInfo, fnCallback) {
    if(!authInfo.isAuth) {
        fnCallback(null);
        return;
    }
    setTimeout(function(){
        fnCallback({name: 'Max'});
    }, 2000);
};

checkAuth(function(authInfo){
    getUser(authInfo, function(user) {
        console.log(user.name);
    });
});