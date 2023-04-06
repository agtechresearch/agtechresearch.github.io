let datafile = "https://agtechresearch.github.io/site/resource/data.json";

function header(document) {
  const div = document.createElement("div");
  const nav = document.createElement("nav");

  div.style.cssText = "display: flex; flex-direction: row; gap: 10px;";
  div.innerHTML = `
        <img src="../resource/img/icon.png">
        <h2>AgTech Research</h2>
    `;

  nav.innerHTML = `
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="member.html">Member</a></li>
            <li><a href="paper.html">Paper</a></li>
            <li><a href="project.html">Project</a></li>
        </ul>
    `;
  document.body.children[0].append(div, nav);
}

function footer(document) {
  const div = document.createElement("div");
  const p = document.createElement("p");

  div.innerHTML = `
        <h3>AgTech Research</h3>
        <h5>Sejong University</h5>
        <h5>Neungdong, Gwangjin-gu</h5>
        <h5>Seoul, South Korea</h5>
    `;

  p.innerText = "Copyright 2023 AgTech Research | All Rights Reserved";
  document.body.children[2].append(div, p);
}

export { header, footer, datafile };
