var sk = [
  "HTML",
  "CSS",
  "JavaScript",
  "C++",
  "Bootstrap",
  "WordPress",
  "Figma",
  "GitHub",
  "VS Code",
  "Chrome DevTools",
  "Shopify (basic)",
  "Responsive Design",
  "UI Development",
  "Cross-Browser Compatibility",
  "Accessibility",
];
document.getElementById("chips").innerHTML = sk
  .map(function (s) {
    return '<span class="chip">' + s + "</span>";
  })
  .join("");
function ic(b) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true">' + b + "</svg>";
}
var T = [
  [
    "HTML",
    ic(
      '<path d="M3 2l1.6 18L12 22l7.4-2L21 2z" fill="#e34f26"/><path d="M12 4v16.6l5.8-1.6L19.2 4z" fill="#ef652a"/><text x="12" y="15.5" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">5</text>',
    ),
  ],
  [
    "CSS",
    ic(
      '<path d="M3 2l1.6 18L12 22l7.4-2L21 2z" fill="#1572b6"/><path d="M12 4v16.6l5.8-1.6L19.2 4z" fill="#33a9dc"/><text x="12" y="15.5" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">3</text>',
    ),
  ],
  [
    "JavaScript",
    ic(
      '<rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e"/><text x="21" y="20" text-anchor="end" font-size="10" font-weight="800" fill="#111" font-family="Inter,sans-serif">JS</text>',
    ),
  ],
  [
    "Bootstrap",
    ic(
      '<rect x="2" y="2" width="20" height="20" rx="5" fill="#7952b3"/><text x="12" y="17.5" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" font-family="Inter,sans-serif">B</text>',
    ),
  ],
  [
    "WordPress",
    ic(
      '<circle cx="12" cy="12" r="10.5" fill="#21759b"/><text x="12" y="16.5" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" font-family="Georgia,serif">W</text>',
    ),
  ],
  [
    "Figma",
    ic(
      '<rect x="4.5" y="1" width="7.5" height="7" rx="3.5" fill="#f24e1e"/><rect x="12" y="1" width="7.5" height="7" rx="3.5" fill="#ff7262"/><rect x="4.5" y="8" width="7.5" height="7" rx="3.5" fill="#a259ff"/><circle cx="15.75" cy="11.5" r="3.75" fill="#1abcfe"/><path d="M4.5 18.5A3.5 3.5 0 0 0 8 22a3.5 3.5 0 0 0 4-3.5V15H8a3.5 3.5 0 0 0-3.5 3.5z" fill="#0acf83"/>',
    ),
  ],
  [
    "GitHub",
    ic(
      '<circle cx="12" cy="12" r="10.5" fill="currentColor"/><path d="M12 5.5c-3.6 0-6.5 2.9-6.5 6.5 0 2.9 1.9 5.3 4.4 6.2.3.1.4-.1.4-.3v-1.1c-1.8.4-2.2-.9-2.2-.9-.3-.8-.7-1-.7-1-.6-.4 0-.4 0-.4.6 0 1 .7 1 .7.6 1 1.5.7 1.9.5.1-.4.2-.7.4-.9-1.4-.2-3-.7-3-3.2 0-.7.3-1.300.7-1.700-.1-.2-.3-.8.1-1.700 0 0 .6-.2 1.800.7a6 6 0 0 1 3.200 0c1.200-.9 1.800-.7 1.800-.7.4.9.2 1.500.1 1.700.4.4.7 1 .7 1.700 0 2.500-1.500 3-3 3.200.2.2.4.6.4 1.200v1.800c0 .2.1.4.4.3 2.500-.9 4.400-3.300 4.400-6.200 0-3.600-2.900-6.500-6.500-6.500z" fill="var(--bg)"/>',
    ),
  ],
  [
    "ChatGPT",
    ic(
      '<circle cx="12" cy="12" r="10.5" fill="#10a37f"/><path d="M12 5.5l5.6 3.2v6.6L12 18.5l-5.6-3.2V8.7z" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 5.5v6.5l5.6 3.3M12 12L6.4 15.3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>',
    ),
  ],
  [
    "Claude AI",
    ic(
      '<g stroke="#d97757" stroke-width="2.2" stroke-linecap="round"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></g><circle cx="12" cy="12" r="2" fill="#d97757"/>',
    ),
  ],
];
var m = T.map(function (t) {
  return "<span>" + t[1] + t[0] + "</span>";
}).join("");
document.getElementById("trk").innerHTML = m + m;
var io = new IntersectionObserver(
  function (e) {
    e.forEach(function (x) {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        setTimeout(
          function (t) {
            t.classList.add("done");
          },
          1200 + parseFloat(x.target.style.transitionDelay || 0) * 1000,
          x.target,
        );
        io.unobserve(x.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".rv").forEach(function (el) {
  io.observe(el);
});
document.querySelectorAll(".grid,.svc,.tl").forEach(function (p) {
  Array.prototype.forEach.call(p.children, function (c, i) {
    c.style.transitionDelay = i * 0.12 + "s";
  });
});
var cio = new IntersectionObserver(
  function (es) {
    es.forEach(function (x) {
      if (!x.isIntersecting) return;
      cio.unobserve(x.target);
      var el = x.target,
        t = el.textContent,
        n = parseInt(t, 10),
        suf = t.replace(/[0-9]/g, ""),
        s = null;
      function st(ts) {
        if (!s) s = ts;
        var p = Math.min((ts - s) / 1200, 1);
        el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(st);
      }
      requestAnimationFrame(st);
    });
  },
  { threshold: 0.6 },
);
document.querySelectorAll(".stat b").forEach(function (b) {
  cio.observe(b);
});
var hd = document.querySelector("header"),
  pb = document.getElementById("pb"),
  hw = document.querySelector(".hero .wrap"),
  tk = false;
function onS() {
  var y = window.scrollY,
    h = document.documentElement.scrollHeight - window.innerHeight;
  pb.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
  hd.classList.toggle("sc", y > 10);
  tk = false;
}
window.addEventListener(
  "scroll",
  function () {
    if (!tk) {
      tk = true;
      requestAnimationFrame(onS);
    }
  },
  { passive: true },
);
onS();
var bg = document.getElementById("bg"),
  lm = document.querySelector(".links");
function cl() {
  lm.classList.remove("open");
  bg.classList.remove("open");
  bg.setAttribute("aria-expanded", "false");
}
bg.onclick = function () {
  var o = lm.classList.toggle("open");
  bg.classList.toggle("open", o);
  bg.setAttribute("aria-expanded", o ? "true" : "false");
};
lm.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", cl);
});
document.addEventListener("click", function (e) {
  if (!e.target.closest("header")) cl();
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 760) cl();
});
var cm = document.getElementById("cm");
function oc(e) {
  if (e) e.preventDefault();
  cm.classList.add("open");
}
document.querySelectorAll(".callb,.callp").forEach(function (a) {
  a.addEventListener("click", oc);
});
document.getElementById("cx").onclick = function () {
  cm.classList.remove("open");
};
cm.addEventListener("click", function (e) {
  if (e.target === cm) cm.classList.remove("open");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") cm.classList.remove("open");
});
document.getElementById("cc").onclick = function () {
  var b = this;
  function ok() {
    b.textContent = "Copied ✓";
    setTimeout(function () {
      b.textContent = "Copy number";
    }, 1800);
  }
  try {
    navigator.clipboard.writeText("+918427936366").then(ok, function () {});
  } catch (e) {}
};

var lk = document.querySelectorAll(".links a"),
  sio = new IntersectionObserver(
    function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting) {
          lk.forEach(function (a) {
            a.classList.toggle("act", a.getAttribute("href") === "#" + x.target.id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
document.querySelectorAll("main section[id]").forEach(function (s) {
  sio.observe(s);
});
document.getElementById("cp").onclick = function () {
  var b = this,
    t = "tejveersinghbhamra111@gmail.com";
  function ok() {
    b.firstChild.nodeValue = "Copied ✓";
    setTimeout(function () {
      b.firstChild.nodeValue = "Copy email";
    }, 1800);
  }
  try {
    navigator.clipboard.writeText(t).then(ok, fb);
  } catch (e) {
    fb();
  }
  function fb() {
    var r = document.createRange();
    r.selectNodeContents(document.getElementById("em"));
    var s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    try {
      document.execCommand("copy");
      ok();
    } catch (e) {}
  }
};
