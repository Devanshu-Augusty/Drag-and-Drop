// getting the two containers/Boxes with the items in the left container/Boxes
let drag = document.getElementById('left');
let drop = document.getElementById('right');
let items = document.getElementsByClassName('list');

// Adding eventlistener dragstart to drag the items of the list class
for (let item of items) {
  item.addEventListener('dragstart', drag_start);
}

// DragStart event handler
function drag_start(e) {
  let selected = e.target;
  selected.setAttribute('id', 'selected');

  // changing the backgroung color during dragging
  selected.style.backgroundColor = "blue";
  
  selected.addEventListener('dragend', ()=> {
  selected.style.backgroundColor = "yellow";
    selected.removeAttribute('id')
  });

}

// handle drop event for right box
right.addEventListener('drop', (e)=> {
  let selected = document.getElementById('selected');
  right.appendChild(selected);
  selected.removeAttribute('id');
  
  // success message after dropping an item onto the 2nd conatiner/Box
  alert("Item Dropped Successfully");
})

// This will the Prevent default behavior on dragover event
right.addEventListener('dragover', (e)=> {
  e.preventDefault();
})

// function to reload the webpage to reset the containers/Boxes to their original state
function reload() {
  location.reload();
}

