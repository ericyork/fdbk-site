function styleSelected() {
  const rbs = document.querySelectorAll('input[type="radio"]');
  for (const rb of rbs) {
    if (rb.checked) {
      rb.parentNode.classList.add("checked");
    } else {
      rb.parentNode.classList.remove("checked");
    }
  }
}

function clearAll() {
  const cbs = document.querySelectorAll('input[type="radio"]:checked');
  for (const cb of cbs) {
    if (cb.checked) {
      cb.checked = false;
      cb.parentNode.classList.remove("checked");
    }
  }
}
