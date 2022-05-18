;(function() {
  const showMore = document.createElement('span')
  showMore.innerText = '显示'
  showMore.style = `
    position: absolute;
    right: 0;
    bottom: 0;
    vertical-align: middle;
    background-color: white;
  `
  const collections = document.getElementsByClassName('showmore')
  function fitContent(
    elem
  ) {
    const parent = elem.parentNode
    const { width: w, height: h } = getComputedStyle(elem)
    const { width: pw, height: ph, overflow, whiteSpace } = getComputedStyle(parent)
    if (overflow.split(' ')[0] !== 'hidden') {
      parent.style.overflowX = 'hidden'
    }
    if (whiteSpace !== 'nowrap') {
      
    }

    if (pw <= w || ph <= h) {
      parent.appendChild(showMore.cloneNode(true))
    }
  }
  for (var i = 0; i < collections.length; i++) {
    fitContent(collections[i])
  }
})()