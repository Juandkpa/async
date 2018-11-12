const getUser = function(){
    setTimeout(function(){
        return {name: 'max'};
    }, 2000);
};

const user = getUser();
console.log(user.name); //don't work

