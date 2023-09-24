// Random function of the site is shown here. This website is mainly a proof of how
// Popups and other annoying features of certain websites are done. I also wrote in
// An "encryption" / "decryption" website
// As you can see it is a simple CaesarCipher-esque function

// Substitution cipher key
const substitutionKey = {
  a: "q",
  b: "w",
  c: "e",
  d: "r",
  e: "t",
  f: "y",
  g: "u",
  h: "i",
  i: "o",
  j: "p",
  k: "a",
  l: "s",
  m: "d",
  n: "f",
  o: "g",
  p: "h",
  q: "j",
  r: "k",
  s: "l",
  t: "z",
  u: "x",
  v: "c",
  w: "v",
  x: "b",
  y: "n",
  z: "m",
};

function encrypt() {
  const plaintext = document.getElementById("plaintext").value.toLowerCase();
  let encrypted = "";

  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];
    if (substitutionKey[char]) {
      encrypted += substitutionKey[char];
    } else {
      encrypted += char;
    }
  }
  document.getElementById("encrypted").value = encrypted;
}

// Substitution cipher key for decryption
const decryptionKey = {
  q: "a",
  w: "b",
  e: "c",
  r: "d",
  t: "e",
  y: "f",
  u: "g",
  i: "h",
  o: "i",
  p: "j",
  a: "k",
  s: "l",
  d: "m",
  f: "n",
  g: "o",
  h: "p",
  j: "q",
  k: "r",
  l: "s",
  z: "t",
  x: "u",
  c: "v",
  v: "w",
  b: "x",
  n: "y",
  m: "z",
};

function decrypt() {
  const encryptedText = document
    .getElementById("encrypted")
    .value.toLowerCase();
  let decrypted = "";

  for (let i = 0; i < encryptedText.length; i++) {
    const char = encryptedText[i];
    if (decryptionKey[char]) {
      decrypted += decryptionKey[char];
    } else {
      decrypted += char;
    }
  }

  document.getElementById("decrypted").value = decrypted;
}

// Console message

let msg = () => {
  const consoleStyles = `
        font-size: 36px;
        color: #FF0000;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    `;

  console.log("%cHold Up!", consoleStyles);
  console.log(
    "%cIf someone told you to copy/paste something here, you have an 11/10 chance you're being scammed.",
    consoleStyles
  );
  console.log(
    "%cPasting anything in here could give attackers access to your account.",
    consoleStyles
  );
  console.log(
    "%cAlthough, there are no accounts with this website, so it really doesn't matter. Have fun.",
    consoleStyles
  );
  console.log(
    "%cIf you do understand exactly what you are doing, you should come work with us: https://torindev.com/jobs",
    consoleStyles
  );
};

msg();
