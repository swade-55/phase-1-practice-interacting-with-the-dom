//let count = 0;
let timer;
let sec = 0;
function createTimer() {
    timer = setInterval(() => {
        count.innerHTML = sec;
        sec++;
    }, 1000)
}

let count = document.getElementById('counter');
document.addEventListener('DOMContentLoaded', () => {
    createTimer();
})

let minus = document.getElementById('minus');
minus.addEventListener('click', () => {
    count.textContent--;
    count.innerHTML = count.textContent;
})

let submit = document.getElementById('submit');
let commentInput = document.getElementById('comment-input');
submit.addEventListener('click', () => {
    if (commentInput) {
        const newComment = document.createElement('h3');
        commentInput.appendChild(newComment);
    }
})

let plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    count.textContent++;
    count.innerHTML = count.textContent;
})

let listContainer = document.querySelector('.likes');
console.log(listContainer);
let heart = document.getElementById('heart');
let heartContent = [];
heart.addEventListener('click', () => {
    let number = count.textContent;
    const newList = document.createElement('li');
    newList.id = number;
    if (heartContent.includes(number)) {
        let matchingId = document.getElementById(number);
         matchingId.textContent = number + ` has been liked ${numberLikes+=1} times`; }
    else {
        newList.textContent = count.textContent + ` has been liked ${numberLikes = 1} time`;
        listContainer.appendChild(newList);
        heartContent.push(number);
    }
});



function disableBtn() {
    heart.disabled = true;
    plus.disabled = true;
    minus.disabled = true;
    submit.disabled = true;
}

function enableBtn() {
    heart.disabled = false;
    plus.disabled = false;
    minus.disabled = false;
    submit.disabled = false;
}

let countToggle = document.getElementById('pause');
countToggle.addEventListener('click', () => {
    console.log(countToggle.textContent);
    if (countToggle.textContent == ' pause ') {
        clearInterval(timer);
        countToggle.textContent = ' resume ';
        disableBtn();
    } else if (countToggle.textContent == ' resume ') {
        createTimer();
        countToggle.textContent = ' pause ';
        enableBtn();
    }

})



