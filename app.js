'use strict';

let myFoem = document.getElementById('myForm');
let contanir = document.getElementById('contanir');
let tableEl = document.createElement('table');
contanir.appendChild(tableEl);

myFoem.addEventListener('submit',addNewOrder);

let orders = [];
let img = ['img/pmw.jpg','img/ford.jpg','img/kia.jpg'];

function addToLocalStorage(){
    let data = JSON.stringify(orders);
    localStorage.setItem('orders',data);
}
function readFromLocal(){
    let items = localStorage.getItem('orders');
    let itemObj = JSON.parse(items);

}
// addToLocalStorage();
readFromLocal();
function Orders(customerName,carModel,carPrice){
    this.customerName = customerName;
    this.carModel = carModel;
    this.carPrice = carPrice;
    // img
    
    orders.push(this);
}
 function addNewOrder(event){
    event.preventDefault();
    let customerName = event.target.customerName.value;
    let carModle = event.target.carModle.value;

    let newOrder = new Orders(customerName , carModle,customerName);
    newOrder.render();
    addToLocalStorage();
//    readFromLocal();
    

}

Orders.prototype.randomNumber = function(min,max){
    min = 1000;
    max = 10000;
    Math.floor(this.carPrice.Math.random() * (max - min + 1)) + min;
}
function addToHeader(){
let trEl = document.createElement('tr')
tableEl.appendChild(trEl);

let thEl1 = document.createElement('th')
trEl.appendChild(thEl1);
thEl1.textContent = 'Order Image';

let thEl2 = document.createElement('th')
trEl.appendChild(thEl2);
thEl2.textContent = 'Order Details';


}
addToHeader();

Orders.prototype.render = function(){

    let trEl = document.createElement('tr')
tableEl.appendChild(trEl);

let thEl = document.createElement('td');
trEl.appendChild(thEl);

 

let thEl2 = document.createElement('td');
trEl.appendChild(thEl2);
thEl2.textContent = `${this.customerName} ${this.carModel}  ${this.carPrice}`;

}

let hala = new Orders('hala','BMW',100);
hala.render();


