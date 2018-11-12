const button = document.querySelector('button');
const handleClick = function() {
    return new Promise(function(resolve){
        button.addEventListener('click', function(){
            resolve(event);
        });
    });
}

handleClick()
.then(function(event) {
    console.log("events comes from:",event.target);
});