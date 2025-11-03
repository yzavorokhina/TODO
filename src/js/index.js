
// class Product{
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
// }

// // let cart = [];

// /* получили строку в формате JSON и из него восстановили массив объектов */
// let storageCart = JSON.parse(window.localStorage.getItem('cart'));
// let cart = storageCart ? storageCart : [];

// console.log(storageCart);

// const bread = new Product(1, 'Хлеб');
// const tea = new Product(2, 'Чёрный чай');

// // cart[0] = bread;
// // cart[1] = tea;
// cart.push(bread);
// cart.push(tea);
// console.log(cart);

// let jsonCart = JSON.stringify(cart);

// window.localStorage.setItem('cart', jsonCart);

import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid';
// console.log(uuidv4());
import Task from './task.js';


let tasks = JSON.parse(window.localStorage.getItem('tasks'));

// console.log(tasks);

if(!tasks){
    tasks = [];
}

function addTaskToList(task){

    const list = $(".tasks");
    list.append(`<li class="${task.status}">${task.name}</li>`);
    tasks.push(task);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}


$(document).ready(function(){

    tasks.forEach(function(item){
        addTaskToList(item);
    });


    $("#add-task").click(function(){
        let text = $("#task").val();


        $("#task").val(null);


        if(!text){
            alert('Введите название задачи');
            return;
        }

        const task = new Task(uuidv4(), text, 'in-progress');

        // console.log(task);

       addTaskToList(task);
    });
});