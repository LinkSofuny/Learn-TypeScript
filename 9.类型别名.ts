type EventNames = "click" | 'scroll' | 'mousemove'
function handleEvemt(el: Element, event: EventNames) {
  // ...
}

handleEvemt(document.querySelector('div'), 'dbclick')
handleEvemt(document.querySelector('div'), 'scroll')