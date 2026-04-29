// dom references
const selectButton = document.getElementById('select-button');

// safe navigation
function addSafeNavigation(button, url) {
  if (!button) return;
  button.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = url;
  });
}

addSafeNavigation(selectButton, 'camera.html');