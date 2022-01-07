const nav = document.querySelector('.nav-about');
const paraf = document.querySelector('.paraf');

nav.addEventListener('mouseover', function() {
  paraf.style.transform = 'translateY(0)'
})

nav.addEventListener('mouseout', function() {
  paraf.style.transform = 'translateY(-25rem)'
})


