// //vanilla JavaScript
// function newItem(){
//   //1. Adding a new item to the list of items: 
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("input").value;
//   let text = document.createTextNode(inputValue);
//   li.appendChild(text);
  
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     let list = document.querySelector('#list');
//     list.appendChild(li);
//   }
  
//   //2. Crossing out an item from the list of items:
//   function crossOut() {
//     li.classList.toggle("strike");
//   }
  
//   li.addEventListener("dblclick",crossOut);
  
//   //3(i). Adding the delete button "X": 
//   let crossOutButton = document.createElement("crossOutButton");
//   crossOutButton.appendChild(document.createTextNode("X"));
//   li.appendChild(crossOutButton);
  
//   crossOutButton.addEventListener("click", deleteListItem);
//   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//   function deleteListItem(){
//     li.classList.add("delete")
//   }

//   // 4. Reordering the items: 
//   $('#list').sortable();
// }
  
// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
  
// jQuery Code
//1. Adding a new item to the list by clicking button and clear input:
$('#button').click(function(){
  let inputValue = $('#input').val();

  if(inputValue === ''){
    alert('You must write something!');
  }else{
    let li = $('<li></li>');
    li.append(inputValue);
    inputValue = '';

    //3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    $(li).append(crossOutButton);

    $('#list').append(li);

    $('input').val('');

    crossOutButton.click(function deleteListItem(){
      $(li).addClass('delete');
    });
  }
});

//1. Adding a new item to the list by pressing enter and clear input:
$('input').keypress(function(e){
  if(e.which === 13){
    e.preventDefault();
    let inputValue = $('input').val();

    if(inputValue === ''){
      alert('You must write something!');
    }else{
      let li = $('<li></li>');
      li.append(inputValue);
      inputValue = '';
      
      //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      $(li).append(crossOutButton);

      $('#list').append(li);

      $('input').val('');

      crossOutButton.click(function deleteListItem(){
        $(li).addClass('delete');
      });
    }
  }
});

//2. Crossing an item out:
$('#list').on('dblclick', 'li', function crossOut(){ 
  $(this).toggleClass('strike');
});

//4. Reordering the items:
$('#list').sortable();