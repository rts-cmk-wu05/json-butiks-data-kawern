const cars = [{
    "make": "Toyota",
    "models": [{
        "name": "Yaris"
    },{
        "name": "Carina"
    }]
},{
    "make": "Ford",
    "models": [{
        "name": "Mondeo"
    },{
        "name": "Fiesta"
    }]
}];

/* cars.forEach(function (car) {
    console.log(car.make);
}); */

/* for (let int = 0; int < cars.length; int++) {
    console.log(cars[int].make);
} */

/* let int = 0;
while (int < cars.length) {
    console.log(cars[int].make);
    int++;
} */

cars.forEach(function (car) {
    car.models.forEach(function (model) {
        console.log(car.make, model.name);
    });
});