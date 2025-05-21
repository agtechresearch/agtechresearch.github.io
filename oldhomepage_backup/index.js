let datafile = "https://agtechresearch.github.io/resource/data.json";

function header(document) {
  const div = document.createElement("div");
  const nav = document.createElement("nav");

  div.style.cssText = "display: flex; flex-direction: row; gap: 10px;";
  div.innerHTML = `
        <img src="../resource/img/icon.png">
        <h2>Agtech Research</h2>
    `;

  nav.innerHTML = `
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="member.html">Member</a></li>
            <li><a href="publications.html">Publications</a></li>
            <li><a href="research.html">Research</a></li>
        </ul>
    `;
  document.body.children[0].append(div, nav);
}

function footer(document) {
  const div = document.createElement("div");
  const p = document.createElement("p");

  div.innerHTML = `
        <h3>Agtech Research</h3>
        <h5>Chungmu Bldg. 502B, Sejong University</h5>
        <h5>209 Neungdong, Gwangjin-gu, Seoul, Korea</h5>
        <h5>+82.2.3408.3879</h5>
    `;

  p.innerText = "Copyright 2024 AgTech Research | All Rights Reserved";
  document.body.children[2].append(div, p);
}

export { header, footer, datafile };
