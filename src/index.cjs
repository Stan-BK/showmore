module.exports = function ShowMore({ wrap, callback, isMultiline, text = '显示更多', color = 'deepskyblue' }) {
  wrap = document.querySelector(wrap)
  const collections = wrap.getElementsByClassName('showmore')
  function fitContent(
    elem
  ) {
    const parent = elem.parentNode
    if (!isMultiline) {
      parent.style.overflowX = 'hidden'
      parent.style.whiteSpace = 'nowrap'
    }
    let { overflow, backgroundColor, lineHeight } = getComputedStyle(parent)
    lineHeight === 'normal' && (lineHeight = '22px')
    if (overflow.split(' ')[0] !== 'hidden') {
      parent.style.overflowX = 'hidden'
    }
    addShowMore(parent, backgroundColor, elem)
    const observer = new ResizeObserver((list) => {
      let info = list[0]
      let { width: w, height: h } = elem.getBoundingClientRect()
      let { width: cw, height: ch } = info.contentRect
      let target = info.target
      let __showmore = target.getElementsByClassName('__showmore')[0]
      if (!isMultiline && cw <= w) {
        __showmore.style.display = 'inline-block'
      } else if (isMultiline && ch <= (h - parseInt(lineHeight))) {
        __showmore.style.display = 'inline-block'
      } else {
        __showmore.style.display = 'none'
      }
    })
    observer.observe(wrap)
  }
  function addShowMore(
    elem,
    bgc,
    target
  ) {
    const showMore = document.createElement('span')
    showMore.innerText = text
    showMore.className = '__showmore'
    showMore.style = `
      display: inline-block;
      position: absolute;
      right: 0;
      ${ isMultiline ? 'bottom' : 'top' }: 0;
      vertical-align: middle;
      background: radial-gradient(${ bgc } 70%, transparent);
      color: ${ color };
      padding: 0 2px;
      box-shadow: 1px 1px 10px ${bgc} inset;
      cursor: ${ callback ? 'pointer' : 'auto' };
    `
    if (callback) {
      showMore.addEventListener('click', function() {
        callback(showMore, target, elem)
      })
    }
    elem.appendChild(showMore)
  }
  for (let i = 0; i < collections.length; i++) {
    fitContent(collections[i])
  }
}