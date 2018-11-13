const button = document.querySelector('button');
const observable = Rx.Observable.fromEvent(button, 'click');

observable
.throttleTime(1000)
.map(function(data){return data.clientY})
.subscribe( function(coord) {
    console.log(coord);
});