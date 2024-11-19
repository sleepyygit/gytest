function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = "graveyard";  // Set the password you want (it could be a hidden ARG code).

  if (password === correctPassword) {
    document.getElementById('message').style.display = "block"; // Show hidden message.
  } else {
    alert("where do you think you are?");
  }
}
