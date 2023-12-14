let form = document.querySelector(".todoask")
let inp = form.querySelector("#todo")
let container = document.querySelector('.box')

form.onsubmit = (e) => {
    e.preventDefault();

    let todo = {
        id: Math.random(),
        title: inp.value,
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    }
    console.log(todo);
}




