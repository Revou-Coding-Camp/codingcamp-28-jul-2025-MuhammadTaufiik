window.onload = function () {
  let name = "";

  while (!name) {
    name = prompt("Hi, what's your name?");
    if (!name) {
      alert("Name cannot be empty!");
    }
  }

  document.getElementById("welcome-text").textContent =
    `Hello, ${name}! I'm excited to share my work with you.`;
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields!";
    feedback.style.color = "red";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";

    document.getElementById("outputName").textContent = name;
    document.getElementById("outputEmail").textContent = email;
    document.getElementById("outputMessage").textContent = message;

    document.getElementById("contactForm").reset();
  }
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});
