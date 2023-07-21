function validateForm() {
  let x = document.getElementById("email").value;
  let text;
  if (x == "") {
    text = "Please enter your email.";
    document.getElementById("msg1").innerHTML = text;
    document.getElementById("email").style.borderColor = "red";
  } else {
    document.getElementById("msg1").innerHTML = "";
    document.getElementById("passcon").style.borderColor = "black";
  }

  let y = document.getElementById("pass").value;
  let text1;
  if (y == "") {
    text1 = "Please enter your password.";
    document.getElementById("msg2").innerHTML = text1;
    document.getElementById("pass").style.borderColor = "red";
  } else {
    document.getElementById("msg2").innerHTML = "";
    document.getElementById("passcon").style.borderColor = "black";
  }

  let z = document.getElementById("passcon").value;
  let text2;
  if (z == "") {
    text2 = "Please enter your password.";
    document.getElementById("msg3").innerHTML = text2;
    document.getElementById("passcon").style.borderColor = "red";
  } else if (z != y) {
    text2 = "Enter the right password";
    document.getElementById("msg3").innerHTML = text2;
    document.getElementById("passcon").style.borderColor = "red";
  } else {
    document.getElementById("msg3").innerHTML = "";
    document.getElementById("passcon").style.borderColor = "black";
  }
}
