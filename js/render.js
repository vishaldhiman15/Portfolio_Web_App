/**
 * render.js
 * Renders all portfolio sections from the D data object.
 * Called on page load and after every editor change.
 */

function renderPortfolio() {
  const h = D.hero;
  const a = D.about;
  const c = D.contact;

  /* ── NAV & FOOTER LOGO ── */
  document.getElementById('nl').textContent    = h.nl || 'V/';
  document.getElementById('flogo').textContent = h.nl || 'V/';

  /* ── HERO ── */
  document.getElementById('hbadge').textContent = h.badge;
  document.getElementById('hname').innerHTML =
    `${h.name}<br/><em id="haw">${h.aw}</em><br/><span id="htl">${h.tl}</span>`;
  document.getElementById('hrole').textContent = h.role;
  document.getElementById('hbio').textContent  = h.bio;
  document.getElementById('hcta').textContent  = (h.cta || 'View My Work') + ' →';
  document.getElementById('s1n').textContent = h.s1n;
  document.getElementById('s1l').textContent = h.s1l;
  document.getElementById('s2n').textContent = h.s2n;
  document.getElementById('s2l').textContent = h.s2l;
  document.getElementById('s3n').textContent = h.s3n;
  document.getElementById('s3l').textContent = h.s3l;

  /* ── ABOUT ── */
  document.getElementById('ap1').textContent = a.p1;
  document.getElementById('ap2').textContent = a.p2;
  document.getElementById('ap3').textContent = a.p3;
  document.getElementById('abadges').innerHTML = (a.badges || '')
    .split(',')
    .map(b => b.trim())
    .filter(Boolean)
    .map(b => `<span class="badge">${b}</span>`)
    .join('');

  /* ── TIMELINE ── */
  document.getElementById('tlrender').innerHTML = D.tl
    .map(t => `
      <div class="tli">
        <div class="tldot"></div>
        <div class="tlyr">${t.y}</div>
        <div class="tlinfo">
          <p>${t.t}</p>
          <span>${t.s}</span>
        </div>
      </div>`)
    .join('');

  /* ── SKILLS ── */
  document.getElementById('skrender').innerHTML = D.sk
    .map(s => `
      <div class="skcard reveal">
        <div class="skicon">${s.i || '💡'}</div>
        <h3>${s.n}</h3>
        <p>${s.d}</p>
        <div class="sktags">
          ${(s.tg || '').split(',').map(t => `<span class="sktag">${t.trim()}</span>`).join('')}
        </div>
        <div class="skbar">
          <div class="skbarlbl">
            <span>Proficiency</span><span>${s.lv}%</span>
          </div>
          <div class="sktrack">
            <div class="skfill" style="width:${s.lv}%"></div>
          </div>
        </div>
      </div>`)
    .join('');

  /* ── PROJECTS FILTER ── */
  const cats = [...new Set(
    D.pr.flatMap(p => (p.cat || '').split(' ')).filter(Boolean)
  )];
  document.getElementById('pfil').innerHTML =
    `<button class="fbtn active" onclick="filterP('all',this)">All</button>` +
    cats.map(c =>
      `<button class="fbtn" onclick="filterP('${c}',this)">${c.charAt(0).toUpperCase() + c.slice(1)}</button>`
    ).join('');

  /* ── PROJECTS ── */
  document.getElementById('prrender').innerHTML = D.pr
    .map(p => `
      <div class="pcard reveal" data-cat="${p.cat || ''}">
        <div class="pprev" style="background:${p.bg || '#1a1a25'}">
          <span style="position:relative;z-index:1;font-size:50px;">${p.em || '🚀'}</span>
          <span class="plbadge">● Live</span>
        </div>
        <div class="pbody">
          <div class="ptype">${p.tp || 'Project'}</div>
          <h3>${p.n}</h3>
          <p>${p.d}</p>
          <div class="pstack">
            ${(p.st || '').split(',').map(t => `<span class="stag">${t.trim()}</span>`).join('')}
          </div>
          <div class="pacts">
            <a class="pbtn pdemo" href="#"
              onclick="openDemo('${p.n.replace(/'/g,"\\'")}','${p.demo}');return false;">
              ▶ Live Demo
            </a>
            <a class="pbtn pgh" href="${p.gh}" target="_blank">GitHub →</a>
          </div>
        </div>
      </div>`)
    .join('');

  /* ── GITHUB ── */
  document.getElementById('ghrender').innerHTML = D.gh
    .map(r => `
      <a class="ghcard reveal" href="${r.url}" target="_blank">
        <div class="ghtop">
          <span class="ghname">${r.n}</span>
          <span class="ghpub">Public</span>
        </div>
        <p class="ghdesc">${r.d}</p>
        <div class="ghmeta">
          <span><span class="ldot" style="background:${r.lc || '#e8ff47'}"></span>${r.l || 'JS'}</span>
          <span>⭐ ${r.st}</span>
          <span>🍴 ${r.fk}</span>
        </div>
        <span class="ghvisit">Visit on GitHub →</span>
      </a>`)
    .join('');

  /* ── CONTACT INFO ── */
  document.getElementById('cinfo').innerHTML = `
    <div class="citem">
      <div class="cico">📧</div>
      <div class="cdet"><p>Email</p><a href="mailto:${c.email}">${c.email || '—'}</a></div>
    </div>
    <div class="citem">
      <div class="cico">💼</div>
      <div class="cdet"><p>LinkedIn</p><a href="${c.li}" target="_blank">${c.li || '—'}</a></div>
    </div>
    <div class="citem">
      <div class="cico">🐙</div>
      <div class="cdet"><p>GitHub</p><a href="${c.gh}" target="_blank">${c.gh || '—'}</a></div>
    </div>
    <div class="citem">
      <div class="cico">📍</div>
      <div class="cdet"><p>Location</p><span>${c.loc || '—'}</span></div>
    </div>`;

  /* ── FOOTER ── */
  document.getElementById('fcopy').textContent = c.ft;
  document.getElementById('fsocials').innerHTML = `
    <a class="slink" href="${c.gh}"    target="_blank">🐙</a>
    <a class="slink" href="${c.li}"    target="_blank">💼</a>
    <a class="slink" href="mailto:${c.email}">📧</a>`;

  reObs();
}

/* Project filter */
function filterP(cat, btn) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pcard').forEach(card => {
    card.style.display =
      (cat === 'all' || (card.dataset.cat || '').includes(cat)) ? '' : 'none';
  });
}

/* Demo modal */
function openDemo(title, url) {
  document.getElementById('dtitle').textContent    = title;
  document.getElementById('durl').textContent      = url;
  document.getElementById('dphtitle').textContent  = title;
  document.getElementById('dext').href             = url;
  document.getElementById('dmodal').classList.add('open');
}
function closeDemo() {
  document.getElementById('dmodal').classList.remove('open');
}

/* Contact form */
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.fsub');
  btn.textContent  = 'Sending...';
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.textContent   = 'Send Message ✉️';
    btn.style.opacity = '1';
    document.getElementById('fsuccess').style.display = 'block';
    e.target.reset();
    setTimeout(() => document.getElementById('fsuccess').style.display = 'none', 4000);
  }, 1200);
}
