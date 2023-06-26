console.log(document)

const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

myMessage.innerText = 'This is a message in the DOM!'

setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 )

const clearMessage = document.querySelector('.clearMessage');
clearMessage.addEventListener('click', function() {
  myMessage.innerText = ''
});

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
   alert("button clicked!")
});

theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function() {
  setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
  }, 3000 )
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
})

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})
