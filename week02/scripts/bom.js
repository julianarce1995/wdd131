const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");
const deleteButton = document.createElement("button");
const li = document.createElement("li");

button.addEventListener("click", () => {
    if (input.value.trim() != "") {

        li.textContent = input.value;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);
        input.value = "";
    }
})

deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
});