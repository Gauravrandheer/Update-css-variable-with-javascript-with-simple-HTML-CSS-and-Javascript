const inputs = document.querySelectorAll(`.controls input`);


function handlevariable(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}



inputs.forEach(input => {
  input.addEventListener('change',handlevariable);
  input.addEventListener('mousemove',handlevariable);
});

// inputs.forEach(input => {
//
// });
