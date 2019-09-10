// Your code goes here
document.addEventListener("mouseover", element => {
    element.target.style.backgroundColor = "black";
    element.target.style.color = "white";
})
document.addEventListener("mouseout", element => {
    element.target.style.backgroundColor = "white";
    element.target.style.color = "black";
})

let imgcont = document.querySelectorAll('.img-content');
document.addEventListener('keydown', function() {
    imgcont.forEach(element => {
        element.style.display = "none";
    })
})

let p = document.querySelectorAll('p');
document.addEventListener('wheel', element => {
    if(element.deltaY < 0){
        p.forEach(e => {
            e.style.fontSize = "smaller";
        })
    }
    else if (element.deltaY > 0){
        p.forEach(e => {
            e.style.fontSize = "larger";
        })
    }
})

window.addEventListener('load', event => {
    document.querySelector('body').style.backgroundColor = "green";
})

let btn = document.querySelectorAll('.btn');
btn.forEach(element => {
    element.addEventListener('click', event => {
        event.focus();
    })
    element.addEventListener('focus', event => {
        event.target.style.backgroundColor = "pink";
    })
    element.addEventListener('blur', event => {
        event.target.style.backgroundColor = "blue";
    })
})

let anchor = document.querySelectorAll('a');
anchor.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
    })
})