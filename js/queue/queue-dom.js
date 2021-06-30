
const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value= '';
};

const generateListQueue = () => {
  // ... your code goes here
  let list ='';
  if(!queue.isEmpty()){
    
    queue.queueControl.forEach(element => {
      list+=`<li>${element}</li>`
    });
    queueUL.innerHTML = list;
  }else{
    queueUL.innerHTML = ``;
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.innerHTML=` <p>UNDERFLOW ERROR! The queue is already empty</p>`
    warningBottomQueue.style.display = 'block';
    setTimeout(() => {
    warningBottomQueue.style.display = 'none';
      
    }, 2000);
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.innerHTML =`<p>OVERFLOW ERROR! The queue is already full</p>`;
    warningTopQueue.style.display = 'block';
    setTimeout(() => {
    warningTopQueue.style.display = 'none';
      
    }, 2000);
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    if(queueInput.value !== ''){
      queue.enqueue(queueInput.value);
      queueInput.value = '';
      generateListQueue();
    }else{
      alert('The input value should not be empty');
    }
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue();
    generateListQueue();
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue('underflow')
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
