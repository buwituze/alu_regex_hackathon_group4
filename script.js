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
