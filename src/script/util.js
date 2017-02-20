//export function setREM() {
  let html = document.documentElement;
  window.rem = html.getBoundingClientRect().width / 3.2 ;
  html.style.fontSize = window.rem + 'px';
//}