document.addEventListener('copy', (e) => {
  if (window.getSelection) {
    const selection = window.getSelection()
    if (selection && selection.toString().trim() !== '') {
      e.preventDefault()
      e.clipboardData.setData('text/plain', selection.toString())
    }
  }
})
