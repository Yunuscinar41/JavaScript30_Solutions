const list = document.querySelector("#bands");
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) < strip(b) ? -1 : 1));

function addBands(bands) {
  list.innerHTML = bands
    .map((band) => {
      return `
            <li>
                <a>${band}</a>
            </li>
        `;
    })
    .join("");
}

addBands(sortedBands);
