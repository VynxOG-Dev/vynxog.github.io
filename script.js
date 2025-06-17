
const text = [
  "Developer 👨‍💻",
  "Hacker 💻",
  "Linux User 🐧",
  "Open Source Lover ❤️",
];

let i = 0, j = 0, current = '', isDeleting = false;
const typeSpeed = 50;
const target = document.querySelector(".typewriter");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    target.innerHTML = current;

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(type, typeSpeed);
  }
}

type();
