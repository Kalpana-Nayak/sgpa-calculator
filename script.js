function calculateSGPA() {
  let ethics = document.getElementById("ethics").value;
  let os = document.getElementById("os").value;
  let toc = document.getElementById("toc").value;
  let dmdw = document.getElementById("dmdw").value;
  let aiml = document.getElementById("aiml").value;
  let ise = document.getElementById("ise").value;
  let aimlLab = document.getElementById("aimlLab").value;
  let osLab = document.getElementById("osLab").value;
  let tocLab = document.getElementById("tocLab").value;

  // Validation check
  if (!ethics || !os || !toc || !dmdw || !aiml || !ise || !aimlLab || !osLab || !tocLab) {
    alert("Please fill all fields");
    return;
  }

  // Convert to numbers
  ethics = parseFloat(ethics);
  os = parseFloat(os);
  toc = parseFloat(toc);
  dmdw = parseFloat(dmdw);
  aiml = parseFloat(aiml);
  ise = parseFloat(ise);
  aimlLab = parseFloat(aimlLab);
  osLab = parseFloat(osLab);
  tocLab = parseFloat(tocLab);

  let a = os * 3;
  let b = toc * 3;
  let c = aiml * 3;
  let d = dmdw * 3;
  let e = ethics * 2;
  let f = ise * 2;
  let g = osLab * 1.5;
  let h = tocLab * 1.5;
  let i = aimlLab * 1.5;

  let sgpa = ((a + b + c + d + e + f + g + h + i) / 205) * 10;

  document.getElementById("result").innerHTML = "Your SGPA will be: " + sgpa.toFixed(2);
}

document.querySelectorAll(".custom-select").forEach(select => {
    const selected = select.querySelector(".select-selected");
    const options = select.querySelector(".select-items");
    const inputId = select.dataset.input;
    const hiddenInput = document.getElementById(inputId);

    selected.addEventListener("click", () => {
        options.style.display =
            options.style.display === "block" ? "none" : "block";
    });

    options.querySelectorAll("div").forEach(option => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent;
            hiddenInput.value = option.dataset.value; // 🔥 feeds SGPA
            options.style.display = "none";
        });
    });
});

document.addEventListener("click", e => {
    document.querySelectorAll(".select-items").forEach(list => {
        if (!list.parentElement.contains(e.target)) {
            list.style.display = "none";
        }
    });
});


// Theme toggle: applies `light-theme` class on <html> to switch variables.
function applyTheme(theme) {
  document.documentElement.classList.toggle('light-theme', theme === 'light');
  try { localStorage.setItem('theme', theme); } catch (e) {}
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'light' ? '🌞 Light' : '🌙 Dark';
}

function initTheme() {
  const saved = (() => { try { return localStorage.getItem('theme'); } catch (e) { return null; } })();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', function() {
    const isLight = document.documentElement.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
  });
});