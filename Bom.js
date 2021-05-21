const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const output = document.querySelector('.list');

addButton.addEventListener('click', () => {
  if (input.value === '') {
    return;
  }
  
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  li.textContent = input.value;
  deleteButton.textContent = '❌';

  li.append(deleteButton);
  output.append(li);

  deleteButton.addEventListener('click', function() {
    output.removeChild(li);
    input.focus();
    // this line of code should use the removeChild() (Links to an external site.) method
    // this line of code should move the cursor back to the input box using the focus (Links to an external site.) method. 
  });
  
  input.value = '';
});