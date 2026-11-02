// Actualiza el stock por talle/color de catalogo.json y la etiqueta "Últimas unidades".
// Corre todos los días desde .github/workflows/stock-diario.yml
import fs from "fs";

const CFG = JSON.parse(Buffer.from("eyJiYXNlIjogImh0dHBzOi8vZnJpZGFzdG9yZS5jb20uYXIvcHJvZHVjdG9zLyIsICJpdGVtcyI6IHsiYXJyb3lvLXNlY28iOiAiYXJ0LTkwNTAiLCAiYXJ0LTQ2NTAiOiAiYXJ0LTQ2NTAtYTJ0OGUiLCAiMjg1NjA4MDE3IjogImFydC00NzUxIiwgImFydC04MDIyIjogImFydC04MDIyLXpqbGJlIiwgImNhbWV0LW5vcnRlIjogImFydC01MDQ1IiwgIjMyMDI2MDc1OCI6ICI0ODAwLXRlbGEtbWljcm9maWJyYS1laDhxcCIsICIyODU4MDU3ODUiOiAiYXJ0LTYwNzEtbWljcm9maWJyYS1iaWNvbG9yb3IiLCAiY29zdGEtZXNtZXJhbGRhIjogImJpa2luaS1hcnQtNDc1MC1iYW1idWxhIiwgImFydC00ODI1IjogImFydC00ODI1LTFiN2tyIiwgIjMxMjc3Mjk0MCI6ICJiaWtpbmktYXJ0LTQ3MzUtamFjcXVhcmQtbWFsaWJ1LWNvbi1hY2Nlc29yaW8tZGJrb2QiLCAibGEtY2FsZXRhIjogImFydC02MDAwIiwgImxhcy1ncnV0YXMiOiAiYXJ0LTQ4NDYtcHJlLXZlbnRhLWNvcGlhLTFhZDNxIiwgIjIzNzc2NzI4MSI6ICJiaWtpbmktYXJ0LTQ3MzUtamFjcXVhcmQtbWFsaWJ1IiwgImxvcy1wb2NpdG9zIjogImVudGVyaXphLWFydC0xMzAiLCAiMjkzMTUzNDk0IjogImJpa2luaS1hcnQtNDczNi1sdXJleCIsICIyMzQ1Nzg5MTYiOiAiYmlraW5pLWFydC00OTUwLWphY3F1YXJkLW1hbGlidSIsICJtYXItZGUtY29ibyI6ICJhcnQtNDczOC1jb3BpYS00eGlweSIsICIxODEyNzM1MzMiOiAiYXJ0LTYwNTUiLCAiYXJ0LTkwMzIiOiAiYXJ0LTkwMzItNTB6bGoiLCAibmV3LTQ3MzgiOiAiYXJ0LTQ3MzgtMW9zZm0iLCAiMjkwMDAyNDQ0IjogImJpa2luaS1hcnQtODAxMC1yaW8iLCAiMjkwMDA3MzczIjogImJpa2luaS1hcnQtODAzMi1tYXVpIiwgIjI5MzEzNjY4OSI6ICJiaWtpbmktYXJ0LTQ4MDAtbGlzbyIsICIyOTAwMDM4MDQiOiAiYmlraW5pLWFydC05MDQwLXJpbyIsICIzMTY0MDAwNDYiOiAiYXJ0LTQ3NTgtMHZ3djEiLCAiMjkzNjgxMzE3IjogImJpa2luaS1hcnQtODA0NC1tYXVpIiwgImFydC04MDciOiAiZW50ZXJpemEtYXJ0LTgwMS1jb3BpYS0xN2prOSIsICJwbGF5YS1zZXJlbmEiOiAiYXJ0LTExMy10cmljb3QiLCAiMzAzMjU4OTE4IjogImJpa2luaS1hcnQtOTA1NC1yaW8iLCAicHVudGEtaGVybWVuZ28iOiAiYXJ0LTYwNjEtYnJ1c2VsbGEtY29waWEtbWlhNHEiLCAiMzA4NDU0ODMwIjogImJpa2luaS1hcnQtNDc1Ny1mM2syZyIsICIyODEwODY4MDciOiAiYXJ0LTQ3MzUtYmFsaSIsICIzMzI1MjY4NDEiOiAiYXJ0LTYwNzItYnJ1c2VsYS0xMWNnZyIsICJhcnQtOTEyMCI6ICJhcnQtNDg0NS10ZW5lcmlmZS1jb3BpYS02dDB0cCIsICIyOTAwNDA0ODYiOiAiYmlraW5pLWFydC04MDIwLXJpbyIsICJuZXctNDg0NSI6ICJhcnQtNDczNS10ZWxhLW1hdWktY29waWEtaDM5azIiLCAibmV3LTgwODUiOiAiYXJ0LTgwODUtMTcxNnoiLCAic2FuLWVkdWFyZG8iOiAiYXJ0LTYwNzEtdHJpY290IiwgIjI5MDAzOTU0NyI6ICJiaWtpbmktYXJ0LTUwMjAtbWF1aSIsICIyOTc0OTIzODgiOiAiYmlraW5pLWFydC02MDA1LW1hdWkiLCAibmV3LTQ2MzciOiAiYmlraW5pLWFydC00NzM3LWZvaWwtbHVyZXgiLCAiMzA0NTIyMTE5IjogImJpa2luaS1hcnQtNDc1MC1jb24tYWNjZXNvcmlvLXBsYXRlYWRvLWJhbWJ1bGEtZnR0emYiLCAiYXJ0LTQ3OTAiOiAiYXJ0LTQ3OTAtdTh3cmgiLCAicGFjay14My1hcnJveW8tc2VjbyI6ICJwYWNrLXgtMy1hcnQtOTA1MC0yaHR0NyIsICJwYWNrLXgzLWNhbWV0LW5vcnRlIjogInBhY2steC0zLWFydC01MDQ1LW5hcjFsIiwgInBhY2steDMtbGFzLXRvbmluYXMiOiAicGFjay14LTMtYXJ0LTQ3MzUtamFjcXVhcmQtbWFsaWJ1LTZpb3dxIiwgInBhY2steDMtbWFyLWNoaXF1aXRhIjogInBhY2steC0zLWJpa2luaS1hcnQtNDk1MC1rZHk0dCIsICJwYWNrLXgzLW1hci1kZS1sYXMtcGFtcGFzIjogInBhY2steC0zLWFydC02MDU1LXZ1ejFjIiwgInBhY2steDMtbmVjb2NoZWEiOiAicGFjay14LTMtYXJ0LTQ4MDAtbGlzby03amtqbiIsICJwYWNrLXg2LWVsLXRvcmRpbGxvIjogInBhY2steC02LWFydC00ODI1LTFoY2Y4IiwgInBhY2steDYtbWFyLWNoaXF1aXRhIjogImRvY2VuYS1iaWtpbmktYXJ0LTQ5NTAtamFjcXVhcmQtbWFsaWJ1LWNvcGlhLTF4bnFjIiwgInBhY2steDYtbWFyLWRlLWNvYm8iOiAicGFjay14LTYtYXJ0LTQ3MzUtbWF1aS1mOHhhZyIsICJwYWNrLXg2LW1hci1kZWwtcGxhdGEiOiAicGFjay14LTYtYXJ0LTkwMzItMTdhbmIiLCAicGFjay14Ni1tYXItZGVsLXN1ZCI6ICJwYWNrLXgtNi1hcnQtNDczOC0xdGdodiIsICJwYWNrLXg2LXF1ZXF1ZW4iOiAicGFjay14LTYtYXJ0LTkxMjAtMW4ydTkiLCAicGFjay14Ni1zYW4tYmVybmFyZG8iOiAicGFjay14LTYtYXJ0LTQ4NDUtdGVuZXJpZmUtMXI3M3YiLCAicGFjay14Ni12aWxsYS1nZXNlbGwtbm9ydGUiOiAicGFjay14LTYtYXJ0LTQ3OTAtdzczcXQiLCAiZG9jZW5hLWFycm95by1zZWNvIjogImRvY2VuYS1hcnQtOTA1MCIsICJkb2NlbmEtYmFoaWEtYmxhbmNhIjogImRvY2VuYS1hcnQtNDY1MC0xanozaCIsICJkb2NlbmEtY2Fiby1jb3JyaWVudGVzIjogImRvY2VuYS1iaWtpbmktYXJ0LTQ3NTEiLCAiZG9jZW5hLWNhYm8tcG9sb25pbyI6ICJkb2NlbmEtYXJ0LTgwMjItd211ZW8iLCAiZG9jZW5hLWNhbWV0LW5vcnRlIjogImRvY2VuYS1hcnQtNTA0NSIsICJkb2NlbmEtY29zdGEtYm9uaXRhIjogImRvY2VuYS1iaWtpbmktYXJ0LTYwNzEtbWljcm9maWJyYS1iaWNvbG9yIiwgImRvY2VuYS1jb3N0YS1lc21lcmFsZGEiOiAiZG9jZW5hLWFydC00NzUwLWJhbWJ1bGEiLCAiZG9jZW5hLWVsLXRvcmRpbGxvIjogImRvY2VuYS1hcnQtNDgyNS1iYnIwYSIsICJkb2NlbmEtbGFzLXRvbmluYXMiOiAiZG9jZW5hLWFydC00NzM1LWphY3F1YXJkLW1hbGlidSIsICJkb2NlbmEtbG9zLXBvY2l0b3MiOiAiZG9jZW5hLWVudGVyaXphLWFydC0xMzAtMXVmbDgiLCAiZG9jZW5hLW1hci1jaGlxdWl0YSI6ICJkb2NlbmEtYmlraW5pLWFydC00OTUwLWphY3F1YXJkLW1hbGlidSIsICJkb2NlbmEtbWFyLWRlLWNvYm8iOiAiZG9jZW5hLWFydC00NzM1LWphY3F1YXJkLW1hbGlidS1jb3BpYS0xZTZvdCIsICJkb2NlbmEtbWFyLWRlLWxhcy1wYW1wYXMiOiAiZG9jZW5hLWFydC02MDU1LTVyZXFwIiwgImRvY2VuYS1tYXItZGVsLXBsYXRhIjogImRvY2VuYS1hcnQtOTAzMi16eXhpMSIsICJkb2NlbmEtbWFyLWRlbC1zdWQiOiAiZG9jZW5hLWFydC00NzM1LWphY3F1YXJkLW1hbGlidS1jb3BpYS0yaDB1diIsICJkb2NlbmEtbW9udGUtaGVybW9zbyI6ICJkb2NlbmEtYXJ0LTgwMzItbWF1aSIsICJkb2NlbmEtb3JlbnNlIjogImRvY2VuYS1iaWtpbmktYXJ0LTkwNDAtcmlvIiwgImRvY2VuYS1vc3RlbmRlIjogImRvY2VuYS1hcnQtNDc1OC11ajh6dCIsICJkb2NlbmEtcGxheWEtc2VyZW5hIjogImRvY2VuYS1hcnQtMTEzIiwgImRvY2VuYS1wdW50YS1yYXNhIjogImRvY2VuYS1hcnQtNjA3Mi1yanRkMCIsICJkb2NlbmEtcXVlcXVlbiI6ICJkb2NlbmEtYXJ0LTkwMzItY29waWEtMTFiODQiLCAiZG9jZW5hLXNhbi1iZXJuYXJkbyI6ICJkb2NlbmEtYXJ0LTQ3MzUtdGVsYS1tYXVpLWNvcGlhLTFqY3NhIiwgImRvY2VuYS1zYW4tY2xlbWVudGUiOiAiZG9jZW5hLWFydC04MDg1LTEyeTc5IiwgImRvY2VuYS1zYW4tZWR1YXJkbyI6ICJkb2NlbmEtYmlraW5pLWFydC02MDcxLXRyaWNvdCIsICJkb2NlbmEtdmlsbGEtZ2VzZWxsIjogImRvY2VuYS1iaWtpbmktYXJ0LTQ3NTAtYmFtYnVsYS1jb24tYWNjZXNvcmlvLWJpdzBjIiwgImRvY2VuYS12aWxsYS1nZXNlbGwtbm9ydGUiOiAiZG9jZW5hLWFydC00NzkwLTNnaDR4In19", "base64").toString("utf8"));
const LIMITE_ULTIMAS = 100;   // menos de estas unidades en total => "Últimas unidades"
const ARCHIVO = "catalogo.json";

const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
const canon = s => norm(s).replace(/ivpry/g, "ivory").replace(/[()]/g, "").replace(/\s+(tricot|microfibra morley)$/, "")
  .replace(/\s*[\/-]\s*/g, "/").replace(/\s+/g, " ").trim();
const szN = s => String(s || "Unico").replace(/^T/i, "").trim();

function decode(s) {
  return s.replace(/&quot;/g, '"').replace(/&#039;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function parseVariants(html) {
  const m = html.match(/data-variants="([^"]*)"/) || html.match(/data-variants='([^']*)'/);
  if (!m) return null;
  try { return JSON.parse(decode(m[1])); } catch (e) { return null; }
}
async function getVariants(slug) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(CFG.base + slug + "/", { headers: { "User-Agent": "Mozilla/5.0 (Macintosh) stock-sync" } });
      if (r.status === 404) return { gone: true };
      if (r.ok) { const v = parseVariants(await r.text()); if (v) return { vars: v }; }
    } catch (e) {}
    await new Promise(z => setTimeout(z, 2000 * (i + 1)));
  }
  return { error: true };
}

const srcKey = (id, c) => {
  let k = canon(c);
  if (id === "312772940") k = k.replace(/ con accesorio.*$/, "");
  if (id === "new-4738") k = k.replace(/ aro (dorado|plateado)$/, "");
  return k;
};

const raw = fs.readFileSync(ARCHIVO, "utf8");
const data = JSON.parse(raw);
const log = []; let fallas = 0, total = 0;

for (const it of data.items) {
  const slug = CFG.items[it.id];
  if (!slug) { log.push("sin fuente: " + it.name); continue; }
  total++;
  const res = await getVariants(slug);
  if (res.error || res.gone || !res.vars || !res.vars.length) { fallas++; log.push((res.gone ? "ya no existe: " : "no se pudo leer: ") + it.name); continue; }
  const vars = res.vars.map(v => ({ c: v.option0, s: szN(v.option1), ok: !!v.available && (v.stock == null || v.stock > 0), u: v.available ? (v.stock || 0) : 0 }));

  if (it.pack) {
    const sizes = it.sizes || ["Surtido"];
    const st = {};
    for (const s of sizes) st[s] = s === "Surtido" ? vars.some(v => v.ok) : vars.some(v => v.ok && v.s === s);
    it.stock = { Surtido: st };
    continue;
  }

  const by = {};
  for (const v of vars) {
    const k = srcKey(it.id, v.c);
    by[k] = by[k] || { sz: {}, u: 0 };
    by[k].sz[v.s] = by[k].sz[v.s] || v.ok;
    by[k].u += v.u;
  }
  const stock = {};
  let unidades = 0;
  for (const c of it.colors) {
    const f = by[canon(c)];
    stock[c] = {};
    if (f) unidades += f.u;
    const fk = f ? Object.keys(f.sz) : [];
    for (const s of it.sizes) stock[c][s] = f ? (s in f.sz ? f.sz[s] : (fk.length === 1 && it.sizes.indexOf(fk[0]) < 0 ? f.sz[fk[0]] : false)) : false;
    if (!f) log.push("color no encontrado: " + it.name + " / " + c);
  }
  it.stock = stock;
  if (unidades > 0 && unidades < LIMITE_ULTIMAS) it.ultimas = true; else delete it.ultimas;
}

if (total && fallas / total > 0.3) {
  console.log("Demasiadas fallas (" + fallas + "/" + total + "). No se guardan cambios.");
  console.log(log.join("\n"));
  process.exit(1);
}
const out = JSON.stringify(data, null, 2) + "\n";
if (out !== raw) fs.writeFileSync(ARCHIVO, out);
console.log((out !== raw ? "Catálogo actualizado." : "Sin cambios.") + " Artículos revisados: " + total + ", fallas: " + fallas);
if (log.length) console.log(log.join("\n"));
