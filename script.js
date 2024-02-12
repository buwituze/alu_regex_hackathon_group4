const staticText = `
Sample Input for Movie Titles:
The Shawshank Redemption (1994)
Inception (2010)
The Godfather (1972)

Sample Input for Song Lyrics:
[Verse 1] This is a song
[Verse 2] Another line of lyrics
[Verse 3] Yet another verse

Sample Input for Twitter Usernames:
@user1
@developer123
@code_guru

Sample Input for ISBN Numbers:
ISBN 123-4-567-89012-3
ISBN 456-7-890-12345-6
ISBN 789-0-123-45678-9

Sample Input for Jokes:
Why did the chicken cross the road? Because it wanted to get to the other side.
Why did the programmer go broke? Because he used up all his cache.

Sample Input for Episode Titles:
Breaking Bad S01E01: Pilot
Stranger Things S03E05: The Flayed
Game of Thrones S08E03: The Long Night

Sample Input for Dates:
01-Jan-2022
15-Feb-2023
30-Sep-2024

Sample Input for Hex Color Codes:
#FF0000
#00FF00
#0000FF

Sample Input for IP Addresses:
192.168.1.1
10.0.0.1
127.0.0.1
`;

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

const extractOnClick = () => {

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
};
static.onclick = () => {
  const randomStaticText = staticText;
  inputBox.value = randomStaticText;

}
