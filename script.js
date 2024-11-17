
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");


todoForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

  
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

   
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td><button class="delete-button">X</button></td>
    `;


    newRow.querySelector(".delete-button").addEventListener("click", function () {
        newRow.remove();
    });

   
    todoList.appendChild(newRow);

  
    todoForm.reset();
});
