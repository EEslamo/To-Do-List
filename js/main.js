let task = document.querySelector(".all header .add input")
let button = document.querySelector(".all header .add button")
let showtasks = document.querySelector(".all .tasks .container")
showtasks.innerHTML = "";

let alltasks = [];

let rendertask = () => {
    let newtask = {
        value: task.value,
    };

    alltasks.push(newtask);
    showalltasks();
    task.value = "";
};

let deletetask = (index) => {
    alltasks.splice(index, 1);
    showalltasks();
}

let edittask = (index) => {
    inputTask = document.querySelectorAll(".container input");
    editbtn = document.querySelectorAll(".tasks .container .row .options .edit")
    inputTask[index].removeAttribute("readonly")
    editbtn[index].innerText = "Update";
    editbtn[index].setAttribute("onclick", `updateTask(${index})`);
    editbtn[index].classList.replace("edit", "update");
};

let updateTask = (index) => {
    inputTask = document.querySelectorAll(".container input")
    editbtn = document.querySelector(".tasks .container .row .options .update")
    inputTask[index].setAttribute('readonly', 'readonly');
    alltasks[index].value = inputTask[index].value;
    editbtn.setAttribute("onclick", `edittask(${index})`);
    editbtn.innerText = "edit";
    editbtn.classList.replace("update", "edit");
    showalltasks();
}

let showalltasks = () => {
    showtasks.innerHTML = "";
    alltasks.forEach((element, index) => {
        showtasks.innerHTML += `<div class="row"> <input type="text" value="${element.value}" readonly>
        <div class="options">
            <button onclick="edittask(${index})" class="edit">Edit</button>
            <button onclick="deletetask(${index})" class="delete">Delete</button>
        </div>`;
    });
};

button.addEventListener("click", rendertask);