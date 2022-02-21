function showSignInModal(event) {
  hideAllModal(event);
  event.stopPropagation();
  setTimeout(() => {
    enigma.openModal("#auth-modal[data-sign-in]");
  }, 300);
}

function showSignUpModal(event) {
  hideAllModal(event);
  event.stopPropagation();
  setTimeout(() => {
    enigma.openModal("#auth-modal[data-sign-up]");
  }, 300);
}

function hideAllModal(event) {
  event.stopPropagation();
  enigma.closeModal("#auth-modal[data-sign-up]");
  enigma.closeModal("#auth-modal[data-sign-in]");
}
