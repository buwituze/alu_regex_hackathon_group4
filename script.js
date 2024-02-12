function extractData(input) {
  const regexExpressions = {
    "Movie Titles": /(.+) \((\d{4})\)/gm,
    "Song Lyrics": /\[Verse (\d+)\] (.+)/gm,
    "Twitter Username": /@([a-zA-Z0-9_]+)/gm,
    "ISBN Numbers": /^ISBN \d{3}-\d-\d{3}-\d{5}-\d$/gm,
    "Jokes": /Why did the (.+) ? Because (.+)$/gm,
    "Episode Titles": /^(.+?) S(\d{2})E(\d{2}): (.+)$/gm,
    "Dates": /^\d{2}-[A-Za-z]{3}-\d{4}$/gm,
    "HEX Color Codes": /^#[a-fA-F0-9]{6}$/gm,
    "IP Adresses": /^(\d{1,3}\.){3}\d{1,3}$/gm,
  };

  let data = [];

  for (let regex in regexExpressions) {
    const matches = [];
    let match;
    while ((match = regexExpressions[regex].exec(input)) !== null) {
      matches.push(match[0]);
    }
    data[regex] = matches;
  }

  return data;
}

const inputBox = document.querySelector("textarea"),
  checkBtn = document.querySelector(".check"),
  static = document.querySelector(".static");
  output = document.querySelector(".output_text");

checkBtn.onclick = () => {
  const data = extractData(inputBox.value);
  output.innerHTML = "";

  Object.entries(data).forEach(([dataType, dataArray]) => {
    const title = document.createElement("h3");
    const list = document.createElement("ol");
    title.innerText = dataType;
    output.appendChild(title);

    dataArray.forEach((match) => {
      list.innerHTML += `<li>${match}</li>`
    });
    output.appendChild(list)

    if (dataArray.length == 0) {
      const p = document.createElement("p");
      p.innerText = "Nothing found";
      output.appendChild(p);
    }
  });

static.onclick = () => {
  const randomStaticText = staticText;
  inputBox.value = randomStaticText;

}
