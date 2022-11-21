const myModal = document.getElementById('myModal')
const myInput = document.getElementById('exampleModal')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})