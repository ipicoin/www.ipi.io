document.querySelectorAll('.comparison-table').forEach(table => {
  const cells = Array.from(table.querySelectorAll('td, th')).filter(cell => cell.getAttribute('colspan') == null)
  const hintElement = document.getElementById('table-hint')
  let wasClicked = false

  function hideHint() {
    hintElement.style.display = 'none'
    if(wasClicked) {
      window.document.body.removeEventListener('click', hideHint)
    }
    wasClicked = false
  }

  function showHint(cell, text, clicked) {
    const offset = cell.getBoundingClientRect()
    hintElement.innerText = text
    hintElement.style.display = 'block'
    let top = offset.top + window.scrollY + offset.height - 3
    let left = offset.left + window.scrollX + offset.width/2 - hintElement.offsetWidth/2
    if(left < 5) left = 5
    if(left + hintElement.offsetWidth > window.innerWidth - 5) left = window.innerWidth - 5 - hintElement.offsetWidth
    hintElement.style.top = top + 'px'
    hintElement.style.left = left + 'px'
    wasClicked = clicked
    if(wasClicked) {
      setTimeout(() => window.document.body.addEventListener('click', hideHint), 2)
    }
  }

  for(const cell of cells) {
    const text = cell.innerText.trim() || cell.querySelector('.name').innerText.trim()
    cell.addEventListener('click', event => {
      event.stopPropagation()
      showHint(cell, text, true)
    })
    const title = cell.getAttribute('title') || text
    cell.removeAttribute('title')
    cell.addEventListener('mouseover', event => {
      if(wasClicked) return
      event.stopPropagation()
      showHint(cell, title, false)
    })
    cell.addEventListener('mouseout', event => {
      if(wasClicked) return
      hideHint()
    })
  }

})