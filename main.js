let getCounter = document.getElementById('counter');

let count = 0;

function countUp(){
    count++
    updateCount()
}

function countDown(){
    count--
    updateCount()    
}

function updateCount(){
    getCounter.innerText = count
}