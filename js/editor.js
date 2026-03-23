/**
 * editor.js
 * All live editor panel logic:
 * - Fill inputs from D on load
 * - Live update on input change
 * - Timeline / Skills / Projects / GitHub editor CRUD
 */

/* ── FILL EDITOR INPUTS FROM DATA ── */
function fillInputs() {
  const h = D.hero, a = D.about, c = D.contact;
  const sv = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ''; };

  sv('e-name',  h.name);  sv('e-aw',  h.aw);   sv('e-tl',  h.tl);
  sv('e-role',  h.role);  sv('e-badge', h.badge); sv('e-bio', h.bio);
  sv('e-s1n',   h.s1n);   sv('e-s1l', h.s1l);
  sv('e-s2n',   h.s2n);   sv('e-s2l', h.s2l);
  sv('e-s3n',   h.s3n);   sv('e-s3l', h.s3l);
  sv('e-cta',   h.cta);   sv('e-nl',  h.nl);

  sv('e-a1', a.p1); sv('e-a2', a.p2); sv('e-a3', a.p3); sv('e-badges', a.badges);

  sv('e-email', c.email); sv('e-li', c.li);
  sv('e-ghu',   c.gh);    sv('e-loc', c.loc); sv('e-ft', c.ft);

  rTL(); rSK(); rPR(); rGH();
}

/* ── LIVE UPDATE (called on every input event) ── */
function lu() {
  const gv = id => { const el = document.getElementById(id); return el ? el.value : ''; };

  D.hero = {
    name:  gv('e-name')  || 'Vishal',
    aw:    gv('e-aw')    || 'Frontend',
    tl:    gv('e-tl')    || 'Developer',
    role:  gv('e-role'),
    badge: gv('e-badge'),
    bio:   gv('e-bio'),
    s1n:   gv('e-s1n'),  s1l: gv('e-s1l'),
    s2n:   gv('e-s2n'),  s2l: gv('e-s2l'),
    s3n:   gv('e-s3n'),  s3l: gv('e-s3l'),
    cta:   gv('e-cta'),
    nl:    gv('e-nl'),
  };
  D.about = {
    p1: gv('e-a1'), p2: gv('e-a2'), p3: gv('e-a3'),
    badges: gv('e-badges'),
  };
  D.contact = {
    email: gv('e-email'),
    li:    gv('e-li'),
    gh:    gv('e-ghu'),
    loc:   gv('e-loc'),
    ft:    gv('e-ft'),
  };

  renderPortfolio();
}

/* ── PANEL OPEN / CLOSE ── */
function toggleEditor() {
  document.getElementById('epanel').classList.toggle('open');
}

/* ── TAB SWITCHING ── */
function switchTab(name, btn) {
  document.querySelectorAll('.etab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.ep').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

/* ══════════════════════════════════════════
   TIMELINE EDITOR
══════════════════════════════════════════ */
function rTL() {
  document.getElementById('tl-list').innerHTML = D.tl.map((t, i) => `
    <div class="iblock">
      <button class="rbtn" onclick="rmTL(${i})">×</button>
      <div class="erow">
        <div class="eg"><label>Year</label>
          <input value="${t.y}" onchange="D.tl[${i}].y=this.value;renderPortfolio();"/>
        </div>
        <div class="eg"><label>Title</label>
          <input value="${t.t}" onchange="D.tl[${i}].t=this.value;renderPortfolio();"/>
        </div>
      </div>
      <div class="eg"><label>Subtitle</label>
        <input value="${t.s}" onchange="D.tl[${i}].s=this.value;renderPortfolio();"/>
      </div>
    </div>`).join('');
}
function addTL() {
  D.tl.unshift({ y: '2025', t: 'New Role', s: 'Details here' });
  rTL(); renderPortfolio();
}
function rmTL(i) { D.tl.splice(i, 1); rTL(); renderPortfolio(); }

/* ══════════════════════════════════════════
   SKILLS EDITOR
══════════════════════════════════════════ */
function rSK() {
  document.getElementById('sk-list').innerHTML = D.sk.map((s, i) => `
    <div class="iblock">
      <button class="rbtn" onclick="rmSK(${i})">×</button>
      <div class="erow">
        <div class="eg"><label>Icon (emoji)</label>
          <input value="${s.i}" onchange="D.sk[${i}].i=this.value;renderPortfolio();"/>
        </div>
        <div class="eg"><label>Name</label>
          <input value="${s.n}" onchange="D.sk[${i}].n=this.value;renderPortfolio();"/>
        </div>
      </div>
      <div class="eg"><label>Description</label>
        <input value="${s.d}" onchange="D.sk[${i}].d=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>Tags (comma-separated)</label>
        <input value="${s.tg}" onchange="D.sk[${i}].tg=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>Level (0–100)</label>
        <input type="number" min="0" max="100" value="${s.lv}"
          onchange="D.sk[${i}].lv=+this.value;renderPortfolio();"/>
      </div>
    </div>`).join('');
}
function addSK() {
  D.sk.push({ i: '💡', n: 'New Skill', d: 'Describe this skill.', tg: 'Tag1, Tag2', lv: 70 });
  rSK(); renderPortfolio();
}
function rmSK(i) { D.sk.splice(i, 1); rSK(); renderPortfolio(); }

/* ══════════════════════════════════════════
   PROJECTS EDITOR
══════════════════════════════════════════ */
function rPR() {
  document.getElementById('pr-list').innerHTML = D.pr.map((p, i) => `
    <div class="iblock">
      <button class="rbtn" onclick="rmPR(${i})">×</button>
      <div class="erow">
        <div class="eg"><label>Emoji</label>
          <input value="${p.em}" onchange="D.pr[${i}].em=this.value;renderPortfolio();"/>
        </div>
        <div class="eg"><label>Card BG Color</label>
          <input type="color" value="${p.bg || '#1a1a25'}"
            onchange="D.pr[${i}].bg=this.value;renderPortfolio();"
            style="height:36px;padding:2px;cursor:pointer;"/>
        </div>
      </div>
      <div class="eg"><label>Project Name</label>
        <input value="${p.n}" onchange="D.pr[${i}].n=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>Type Label</label>
        <input value="${p.tp}" onchange="D.pr[${i}].tp=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>Description</label>
        <textarea onchange="D.pr[${i}].d=this.value;renderPortfolio();">${p.d}</textarea>
      </div>
      <div class="eg"><label>Tech Stack (comma-separated)</label>
        <input value="${p.st}" onchange="D.pr[${i}].st=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>Filter Tags (e.g. react ui)</label>
        <input value="${p.cat}" onchange="D.pr[${i}].cat=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>Live Demo URL</label>
        <input value="${p.demo}" onchange="D.pr[${i}].demo=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>GitHub URL</label>
        <input value="${p.gh}" onchange="D.pr[${i}].gh=this.value;renderPortfolio();"/>
      </div>
    </div>`).join('');
}
function addPR() {
  D.pr.push({
    em: '🚀', bg: '#111118', tp: 'Project',
    n: 'New Project', d: 'Project description.',
    st: 'React, CSS', cat: 'react',
    demo: 'https://vercel.app', gh: 'https://github.com/vishal',
  });
  rPR(); renderPortfolio();
}
function rmPR(i) { D.pr.splice(i, 1); rPR(); renderPortfolio(); }

/* ══════════════════════════════════════════
   GITHUB EDITOR
══════════════════════════════════════════ */
function rGH() {
  document.getElementById('gh-list').innerHTML = D.gh.map((r, i) => `
    <div class="iblock">
      <button class="rbtn" onclick="rmGH(${i})">×</button>
      <div class="eg"><label>Repo Name</label>
        <input value="${r.n}" onchange="D.gh[${i}].n=this.value;renderPortfolio();"/>
      </div>
      <div class="eg"><label>Description</label>
        <input value="${r.d}" onchange="D.gh[${i}].d=this.value;renderPortfolio();"/>
      </div>
      <div class="erow">
        <div class="eg"><label>Language</label>
          <input value="${r.l}" onchange="D.gh[${i}].l=this.value;renderPortfolio();"/>
        </div>
        <div class="eg"><label>Lang Color</label>
          <input type="color" value="${r.lc || '#e8ff47'}"
            onchange="D.gh[${i}].lc=this.value;renderPortfolio();"
            style="height:36px;padding:2px;cursor:pointer;"/>
        </div>
      </div>
      <div class="erow">
        <div class="eg"><label>⭐ Stars</label>
          <input type="number" value="${r.st}"
            onchange="D.gh[${i}].st=+this.value;renderPortfolio();"/>
        </div>
        <div class="eg"><label>🍴 Forks</label>
          <input type="number" value="${r.fk}"
            onchange="D.gh[${i}].fk=+this.value;renderPortfolio();"/>
        </div>
      </div>
      <div class="eg"><label>GitHub URL</label>
        <input value="${r.url}" onchange="D.gh[${i}].url=this.value;renderPortfolio();"/>
      </div>
    </div>`).join('');
}
function addGH() {
  D.gh.push({ n: 'new-repo', d: 'Repository description.', l: 'JavaScript', lc: '#38bdf8', st: 0, fk: 0, url: 'https://github.com/vishal' });
  rGH(); renderPortfolio();
}
function rmGH(i) { D.gh.splice(i, 1); rGH(); renderPortfolio(); }
