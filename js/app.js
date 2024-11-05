let lightMode = document.getElementById('lightMode')
let darkMode = document.getElementById('darkMode')
let dropdown = document.getElementById('dropdown')

darkMode.addEventListener('click' , ()=>{
  document.documentElement.setAttribute
  ('data-bs-theme' , 'dark')
  localStorage.setItem('theme' , 'dark')
  localStorage.getItem('theme')
  darkMode.classList.add('active')
lightMode.classList.remove('active')
window.addEventListener('load',()=>{
  dropdown.insertAdjacentHTML('afterbegin', `<i class="bi bi-brightness-high-fill"></i>`)  
})
} )

lightMode.addEventListener('click' , ()=>{
  document.documentElement.setAttribute('data-bs-theme' , 'light')
  localStorage.setItem('theme' , 'light')
  localStorage.getItem('theme')
  lightMode.classList.add('active')
  darkMode.classList.remove('active')
} )

let saveMode = localStorage.getItem('theme')
if(saveMode=='dark'){
  document.documentElement.setAttribute
  ('data-bs-theme' , 'dark')
  darkMode.classList.add('active')
 lightMode.classList.remove('active')
  dropdown.insertAdjacentHTML('afterbegin', `<i class="bi bi-brightness-high-fill"></i>`)  
}
else{
  document.documentElement.setAttribute('data-bs-theme' , 'light')
  lightMode.classList.add('active')
  darkMode.classList.remove('active')
 dropdown.insertAdjacentHTML("afterbegin",`<i class="bi bi-moon-fill"></i>`)
}