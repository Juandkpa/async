const getUser = function() {
    return new Promise(
        function (resolve) {
            setTimeout( function() {
                resolve({name: 'Max'});
            }, 2000);
        }
    );
};

getUser()
.then( 
    function(user) {
        console.log("resolved with user: ", user.name);
    }
);