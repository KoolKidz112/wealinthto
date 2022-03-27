require("dotenv").config();

const title = document.getElementById("title");
const input = document.getElementById("val");
const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  if (!checkForUrl(input.value)) {
    sendRequest(input.value);
    input.value = "";
    title.textContent = "sent";
  } else {
    title.textContent = "no links";
  }
});

function checkForUrl(txt) {
  const exp =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(exp);

  return txt.match(regex) ? true : false;
}

function sendRequest(txt) {
  const req = new XMLHttpRequest();
  req.open("POST", process.env.URL);
  req.setRequestHeader("Content-Type", "application/json");
  const params = {
    content: txt,
  };
  req.send(JSON.stringify(params));
}
