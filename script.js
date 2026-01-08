const navLinks = document.getElementById("nav-links");
const menuToggle = document.getElementById("menu-toggle");
const themeToggle = document.getElementById("theme-toggle");

menuToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks?.classList.remove("open"));
});

// Simple theme toggler (light/dark)
let dark = true;
themeToggle?.addEventListener("click", () => {
  dark = !dark;
  document.documentElement.classList.toggle("light", !dark);
  themeToggle.textContent = dark ? "☀️" : "🌙";
});

// Optional: close nav when clicking outside on mobile
document.addEventListener("click", (event) => {
  if (!navLinks || !menuToggle) return;
  const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside) navLinks.classList.remove("open");
});

// Light theme overrides via CSS variables
const lightStyles = document.createElement("style");
lightStyles.textContent = `
:root.light {
  --bg: #f7f8fb;
  --surface: rgba(255, 255, 255, 0.9);
  --surface-strong: rgba(19, 32, 68, 0.08);
  --text: #0f172a;
  --muted: #46506b;
  --shadow: 0 18px 50px rgba(15, 23, 42, 0.12);
}

:root.light body {
  background: radial-gradient(circle at 15% 20%, rgba(101, 240, 198, 0.12), transparent 26%),
    radial-gradient(circle at 80% 0%, rgba(58, 169, 255, 0.15), transparent 24%),
    var(--bg);
}

:root.light .nav {
  background: rgba(247, 248, 251, 0.9);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
}

:root.light .glass {
  border-color: rgba(15, 23, 42, 0.06);
}

:root.light .nav-links {
  background: rgba(247, 248, 251, 0.96);
}

:root.light .brand-mark {
  color: #0f172a;
}
`;
document.head.appendChild(lightStyles);
