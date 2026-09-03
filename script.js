const memories = [
  ["memory-01.jpg","Our first little chapter"],["memory-02.jpg","That smile I love"],["memory-03.jpg","A moment to remember"],
  ["memory-04.jpg","Us, just being us"],["memory-05.jpg","One of my favorites"],["memory-06.jpg","Beautiful you"],
  ["memory-07.jpg","A day I keep close"],["memory-08.jpg","Our happy place"],["memory-09.jpg","Another little memory"],
  ["memory-10.jpg","Laughs & love"],["memory-11.jpg","Forever starts here"],["memory-12.jpg","You & me"],
  ["memory-13.jpg","My favorite person"],["memory-14.jpg","A beautiful day"],["memory-15.jpg","Together"],
  ["memory-16.jpg","Little moments"],["memory-17.jpg","My Begam"],["memory-18.jpg","Always you"],
  ["memory-19.jpg","More memories to make"],["memory-20.jpg","Our story continues"]
];

const grid = document.getElementById("memoryGrid");
memories.forEach(([file, title], i) => {
  const card = document.createElement("article");
  card.className = "memory reveal";
  card.innerHTML = `
    <img src="assets/memories/${file}" alt="${title}" loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
    <div class="memory-placeholder" style="display:none"><span>♥ ${String(i+1).padStart(2,"0")}</span></div>
    <div class="memory-overlay"><b>${title}</b><small>Md Mojahid ♥ Noor Darkhashan</small></div>
  `;
  grid.appendChild(card);
});

const song = document.getElementById("song");
const bouquet = document.getElementById("bouquet");
const status = document.getElementById("musicStatus");

bouquet.addEventListener("click", async () => {
  if (!song.src || song.src.endsWith("assets/song.mp3") && song.readyState === 0) {
    status.textContent = "Add your song as assets/song.mp3, then tap the bouquet ♥";
  }
  try {
    if (song.paused) {
      await song.play();
      status.textContent = "Playing our song... ♥";
      bouquet.classList.add("playing");
    } else {
      song.pause();
      status.textContent = "Paused — tap again to continue";
      bouquet.classList.remove("playing");
    }
  } catch {
    status.textContent = "Add your song as assets/song.mp3 to play it here";
  }
});

song.addEventListener("ended", () => {
  bouquet.classList.remove("playing");
  status.textContent = "Our song ended — tap the bouquet to play again";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
