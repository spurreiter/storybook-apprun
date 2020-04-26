
export const render = (Node) => {
  const el = document.createElement('section')
  if (typeof Node === 'function') {
    new Node().start(el)
  } else {
    app.render(el, Node)
  }
  return el
}
