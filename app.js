let topButton =  document.querySelector('#topbutton')
topButton.addEventListener ('mouseenter', () => {
    topButton.classList.add('animated', 'jello')
})

topButton.addEventListener ('mouseout', () => {
    topButton.classList.remove('animated', 'jello')
})

let logo = document.querySelector('.logo')
logo.addEventListener('mouseenter', () => {
    logo.classList.add('animated', 'jello')
})

logo.addEventListener ('mouseout', () => {
    logo.classList.remove('animated', 'jello')
})

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
topButton.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


