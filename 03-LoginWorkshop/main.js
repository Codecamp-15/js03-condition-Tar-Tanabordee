let user = prompt("Please enter your username:") || "guest";

if (user === "codecamp") {
  let password = prompt("Please enter your password:");
  if (password === "123456") {
    user = "codecamp";
  } else {
    alert("Wrong password");
    user = "guest";
  }
} else {
  user = "guest";
}

alert("Welcome, " + user);