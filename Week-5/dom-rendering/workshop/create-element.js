function createEl(tag, props, ...children) {
  const elem = document.createElement(tag);
  for (const prop in props) {
    elem[prop] = props[prop];
  }
  elem.append(...children);
  return elem;
}

export default createEl;
