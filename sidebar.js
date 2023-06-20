document.addEventListener("DOMContentLoaded", () => {
  const btn_toggle_sidebar = document.getElementById('btn_toggle_sidebar')
  const sidebar = document.getElementById('sidebar')

  btn_toggle_sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('open_aside')
  })
})