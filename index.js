const title = document.getElementById("title");
const input = document.getElementById("val");
const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  if (!checkForUrl(input.value)) {
    sendRequest(input.value);
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
  req.open(
    "POST",
    "https://discord.com/api/webhooks/957457517049421864/Flj_A5UXLiWaiGn2S6926o9QDAaGB3WeCu58n05KZU51sP_-B3dzzg8qzETXtBVJ254c"
  );
  req.setRequestHeader("Content-Type", "application/json");
  const params = {
    content: txt,
  };
  req.send(JSON.stringify(params));
}
