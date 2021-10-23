// dark mode
let localDarkMode = localStorage.getItem('darkMode'); 
let icon = document.querySelector('.toggle ion-icon')
let darkModeToggle = document.querySelector('.toggle');


let enableDarkMode = () => {
  document.body.classList.add('darkMode');
  darkModeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
  localStorage.setItem('localDarkMode', 'enabled');
}

let disableDarkMode = () => {
  document.body.classList.remove('darkMode');
  darkModeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
  localStorage.setItem('localDarkMode', null);
}


if (localDarkMode === 'enabled') { enableDarkMode() }


darkModeToggle.addEventListener('click', () => {
  
  localDarkMode = localStorage.getItem('localDarkMode'); 
  
  if (localDarkMode !== 'enabled') {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});


// anime 

// Wrap every letter in a span
var textWrapper = document.querySelector('.animes');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.animes .letter',
    translateY: [200,0],
    easing: "easeOutExpo",
    duration: 2400,
    delay: (el, i) => 90 * i
  })

  var textWrapper = document.querySelector('.animez');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.animez .letter',
    translateY: [200,0],
    easing: "easeOutExpo",
    duration: 2400,
    delay: (el, i) => 90 * i
  })



  TweenMax.to(".box", 1, {
    opacity: 0,
    y: "100%",
    ease: Expo.easeInOut,
    delay: 1.9,
    });