
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
import '../scss/custom.scss';

let tasks = JSON.parse(window.localStorage.getItem('tasks'));
// console.log(tasks);
if(!tasks){
    tasks = [];
}

function renderList(){
    const list = $(".tasks");
    list.html(null);

    tasks.forEach(function(item){
        addTaskToList(item);   
    });
}

// const list = 'This is global string';

function addTaskToList(task){
    const list = $(".tasks");
    const li = $(`<li class="${task.status}">${task.name}</li>`);
    const doneButton = $('<button>Выполнить</button>');
    doneButton.click(() => {
        // console.log(task);
        tasks.forEach((item, index, tasks) => {
            if(item.id == task.id){

                tasks[index].status = 'done';
            }
        });
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        renderList();
    });

    const removeButton = $('<button>Удалить</button>');
    removeButton.click(() =>{

        if(confirm('Вы действительно хотите удалить задачу?')){
            tasks.forEach((item, index, tasks) => {
                if(item.id == task.id){
                    // let deleted = tasks.slice(index, 1);
                    tasks.splice(index, 1);
                }
            });
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            renderList();
        }
    })

    li.append(doneButton);
    li.append(removeButton);
    list.append(li);  
    // const button = $('button');
    // console.log(list);
}

// let i ='3424';
// for (let i = 0; i < 10; i++){
// }
// console.log(i);

// if(1>0){
//     let i = '2';
// }
// console.log(i);

// console.log(list);
// $(document).ready(function(){
//     tasks.forEach(function(item){
//         addTaskToList(item);
//     });
// });

$("#add-task").click(function(){
    let text = $("#task").val();
    $("#task").val(null);
    if(!text){
        alert('Введите название задачи');
        return;
    }
    const task = new Task(uuidv4(), text, 'in-progress');
    // console.log(task);
    tasks.push(task);
    addTaskToList(task);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
});

renderList();