const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const reactionImg = document.getElementById("reactionImg");
const sideMsg = document.getElementById("sideMsg");

let noCount = 0;

// NO-click GIF (online)
const gifs = [
  "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif" // crying/pleading guy
];

// YES-click GIF (local file in your assets folder)
const yesGif = "./asset/giphy.gif";


// Side messages for NO clicks
const sideMessages = [
  "No? 😳",
  "Wait… really?? 🥺",
  "Okay okay... I’ll buy you Mutton Biriyani 😭🍛",
  "I’ll buy to Armani watch 🛍️🥺",
  "I’ll cook your favourite: Choru + Meen + Beef 😭",
  "I’m literally begging now 🧎‍♂️😭",
  "Last chance… I’ll send you nudes 😭"
];

// Start clean
if (reactionImg) {
  reactionImg.classList.remove("show");
  reactionImg.style.display = "none";
}

function showGif() {
  const gif = gifs[noCount % gifs.length];
  reactionImg.src = gif + "?v=" + Date.now(); // cache-buster
  reactionImg.style.display = "block";
  requestAnimationFrame(() => reactionImg.classList.add("show"));
}

function updateSideMessage() {
  const idx = Math.min(noCount - 1, sideMessages.length - 1);
  sideMsg.textContent = sideMessages[idx];
}

function scaleButtons() {
  const yesScale = 1 + Math.min(noCount * 0.15, 1.5); // max ~2.5x
  const noScale = Math.max(1 - noCount * 0.10, 0.35); // min 0.35x

  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;
}

// NO button click
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  noCount++;

  showGif();
  updateSideMessage();
  scaleButtons();
});

// YES button click
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>YAYYYYY 💖</h1>
    <p class="sub">Good choice. I knew you’d fall for nudes 😏</p>

    <div style="margin-top:14px; display:grid; gap:12px; justify-items:center;">
      <img
        src="${yesGif}?v=${Date.now()}"
        alt="happy yes gif"
        style="width:220px; border-radius:16px; box-shadow:0 10px 25px rgba(0,0,0,0.15);"
      />
      <p style="margin:0; font-size:16px; font-weight:600; line-height:1.35; text-align:center;">
        Keep choosing ‘Yes’ to every Valentine offer I make — always!
        <br/>
        Otherwise… see you in court 😏⚖️💖
      </p>
    </div>

    
    <p class="hint"></p>
  `;
});
