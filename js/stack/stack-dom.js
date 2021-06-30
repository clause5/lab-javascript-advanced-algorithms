// const Stacks = require("./stack-data-structure");

const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = '';
};

const renderListStack = () => {
  // ... your code goes here
  let list ='';
  if(!newStack.isEmpty()){

    newStack.stackControl.forEach(element => {
      list+=`<li>${element}</li>`
    });
    stackList.innerHTML = list;
  }else{

    stackList.innerHTML = '';
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.innerHTML=`<p>UNDERFLOW ERRROR! The stack is empty already.</p>`;
    warningBottomStack.style.display ='block';
    setTimeout(() => {
      warningBottomStack.style.display ='none';
    }, 2000);

  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerHTML = `<p>OVERFLOW ERROR! The stack is full already</p>`;
    warningTopStack.style.display= 'block';
    setTimeout(() => {
      warningTopStack.style.display= 'none';
    }, 2000);
  }
};

const addToStack = () => {
  try {
    if(stackInput.value !== ''){
      newStack.push(stackInput.value);
      clearStackInput();    
      renderListStack();
  } else{
    alert('This input value should not be empty');
  }

  } catch (error) {
    // there was an overflow error, handle it
    generateWarningStack('overflow');
  }
};

const removeFromStack  = () => {
  try {
    newStack.pop();
    renderListStack();
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningStack('underflow');
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
