const button = document.querySelector('button');
const observable = Rx.Observable.fromEvent(button, 'click');

observable.subscribe( function(event) {
    console.log(event.target);
});
