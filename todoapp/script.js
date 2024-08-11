var input=document.querySelector(".input-field")
var button = document.querySelector(".btn")
var listContainer = document.querySelector(".list");
button.addEventListener("click", function() {
     var todoText = input.value.trim();  // Get the value from the input field and trim whitespace
      if (todoText === "") {
        alert("enter a valid value");
        return
      }

    // Create a delete button for each list item
    // var deleteButton = document.createElement("button");
    // deleteButton.textContent = "🗑️Delete";
    // deleteButton.className = "delete-btn";
    // deleteButton.addEventListener("click", function() {
    //     listContainer.removeChild(li); // Remove the list item when delete button is clicked
    // });

    // Append the delete button to the list item
    // li.appendChild(deleteButton);
    
    // // Append the list item to the list container
    // listContainer.appendChild(li);

    // // Clear the input field after adding the to-do
    // input.value = "";
})