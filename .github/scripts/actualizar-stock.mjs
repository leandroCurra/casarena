// Actualiza el stock por talle/color de catalogo.json y la etiqueta "Últimas unidades".
// Corre todos los días desde .github/workflows/stock-diario.yml
import fs from "fs";

const CFG = JSON.parse(Buffer.from("eyJiYXNlIjogImh0dHBzOi8vZnJpZGFzdG9yZS5jb20uYXIvcHJvZHVjdG9zLyIsICJpdGVtcyI6IHsiQmFow61hIEJsYW5jYSI6ICJhcnQtNDY1MC1hMnQ4ZSIsICJDYWJvIENvcnJpZW50ZXMiOiAiYXJ0LTQ3NTEiLCAiQ2FibyBQb2xvbmlvIjogImFydC04MDIyLXpqbGJlIiwgIkNhcmlsw7MiOiAiNDgwMC10ZWxhLW1pY3JvZmlicmEtZWg4cXAiLCAiQ29zdGEgQm9uaXRhIjogImFydC02MDcxLW1pY3JvZmlicmEtYmljb2xvcm9yIiwgIkVsIFRvcmRpbGxvIjogImFydC00ODI1LTFiN2tyIiwgIkZhcm8gUXVlcmFuZMOtIjogImJpa2luaS1hcnQtNDczNS1qYWNxdWFyZC1tYWxpYnUtY29uLWFjY2Vzb3Jpby1kYmtvZCIsICJMYXMgVG9uaW5hcyI6ICJiaWtpbmktYXJ0LTQ3MzUtamFjcXVhcmQtbWFsaWJ1IiwgIk1hciBBenVsIjogImJpa2luaS1hcnQtNDczNi1sdXJleCIsICJNYXIgQ2hpcXVpdGEiOiAiYmlraW5pLWFydC00OTUwLWphY3F1YXJkLW1hbGlidSIsICJNYXIgZGUgbGFzIFBhbXBhcyI6ICJhcnQtNjA1NSIsICJNYXIgZGVsIFBsYXRhIjogImFydC05MDMyLTUwemxqIiwgIk1hciBkZWwgU3VkIjogImFydC00NzM4LTFvc2ZtIiwgIk1pcmFtYXIiOiAiYmlraW5pLWFydC04MDEwLXJpbyIsICJNb250ZSBIZXJtb3NvIjogImJpa2luaS1hcnQtODAzMi1tYXVpIiwgIk5lY29jaGVhIjogImJpa2luaS1hcnQtNDgwMC1saXNvIiwgIk9yZW5zZSI6ICJiaWtpbmktYXJ0LTkwNDAtcmlvIiwgIk9zdGVuZGUiOiAiYXJ0LTQ3NTgtMHZ3djEiLCAiUGVodWVuIEPDsyI6ICJiaWtpbmktYXJ0LTgwNDQtbWF1aSIsICJQaW5hbWFyIjogImVudGVyaXphLWFydC04MDEtY29waWEtMTdqazkiLCAiUHVudGEgQWx0YSI6ICJiaWtpbmktYXJ0LTkwNTQtcmlvIiwgIlB1bnRhIE3DqWRhbm9zIjogImJpa2luaS1hcnQtNDc1Ny1mM2syZyIsICJQdW50YSBNb2dvdGVzIjogImFydC00NzM1LWJhbGkiLCAiUHVudGEgUmFzYSI6ICJhcnQtNjA3Mi1icnVzZWxhLTExY2dnIiwgIlF1ZXF1w6luIjogImFydC00ODQ1LXRlbmVyaWZlLWNvcGlhLTZ0MHRwIiwgIlJldGEiOiAiYmlraW5pLWFydC04MDIwLXJpbyIsICJTYW4gQmVybmFyZG8iOiAiYXJ0LTQ3MzUtdGVsYS1tYXVpLWNvcGlhLWgzOWsyIiwgIlNhbiBDbGVtZW50ZSI6ICJhcnQtODA4NS0xNzE2eiIsICJTYW50YSBDbGFyYSI6ICJiaWtpbmktYXJ0LTUwMjAtbWF1aSIsICJTYW50YSBUZXJlc2l0YSI6ICJiaWtpbmktYXJ0LTYwMDUtbWF1aSIsICJWYWxlcmlhIGRlbCBNYXIiOiAiYmlraW5pLWFydC00NzM3LWZvaWwtbHVyZXgiLCAiVmlsbGEgR2VzZWxsIjogImJpa2luaS1hcnQtNDc1MC1jb24tYWNjZXNvcmlvLXBsYXRlYWRvLWJhbWJ1bGEtZnR0emYiLCAiVmlsbGEgR2VzZWxsIE5vcnRlIjogImFydC00NzkwLXU4d3JoIiwgIk1hciBkZSBDb2JvIjogImFydC00NzM4LWNvcGlhLTR4aXB5IiwgIkNvc3RhIEVzbWVyYWxkYSI6ICJiaWtpbmktYXJ0LTQ3NTAtYmFtYnVsYSIsICJMYSBDYWxldGEiOiAiYXJ0LTYwMDAiLCAiQ2FtZXQgTm9ydGUiOiAiYXJ0LTUwNDUiLCAiQXJyb3lvIFNlY28iOiAiYXJ0LTkwNTAiLCAiTGFzIEdydXRhcyI6ICJhcnQtNDg0Ni1wcmUtdmVudGEtY29waWEtMWFkM3EiLCAiUHVudGEgSGVybWVuZ28iOiAiYXJ0LTYwNjEtYnJ1c2VsbGEtY29waWEtbWlhNHEiLCAiU2FuIEVkdWFyZG8iOiAiYXJ0LTYwNzEtdHJpY290IiwgIlBsYXlhIFNlcmVuYSI6ICJhcnQtMTEzLXRyaWNvdCIsICJMb3MgUG9jaXRvcyI6ICJlbnRlcml6YS1hcnQtMTMwIiwgIlBhY2sgeDMgTWFyIENoaXF1aXRhIjogInBhY2steC0zLWJpa2luaS1hcnQtNDk1MC1rZHk0dCIsICJQYWNrIHgzIE5lY29jaGVhIjogInBhY2steC0zLWFydC00ODAwLWxpc28tN2pram4iLCAiUGFjayB4MyBMYXMgVG9uaW5hcyI6ICJwYWNrLXgtMy1hcnQtNDczNS1qYWNxdWFyZC1tYWxpYnUtNmlvd3EiLCAiUGFjayB4NiBNYXIgQ2hpcXVpdGEiOiAiZG9jZW5hLWJpa2luaS1hcnQtNDk1MC1qYWNxdWFyZC1tYWxpYnUtY29waWEtMXhucWMiLCAiUGFjayB4MyBBcnJveW8gU2VjbyI6ICJwYWNrLXgtMy1hcnQtOTA1MC0yaHR0NyIsICJQYWNrIHgzIENhbWV0IE5vcnRlIjogInBhY2steC0zLWFydC01MDQ1LW5hcjFsIiwgIlBhY2sgeDYgU2FuIEJlcm5hcmRvIjogInBhY2steC02LWFydC00ODQ1LXRlbmVyaWZlLTFyNzN2IiwgIlBhY2sgeDYgUXVlcXXDqW4iOiAicGFjay14LTYtYXJ0LTkxMjAtMW4ydTkiLCAiUGFjayB4NiBWaWxsYSBHZXNlbGwgTm9ydGUiOiAicGFjay14LTYtYXJ0LTQ3OTAtdzczcXQiLCAiUGFjayB4MyBNYXIgZGUgbGFzIFBhbXBhcyI6ICJwYWNrLXgtMy1hcnQtNjA1NS12dXoxYyIsICJQYWNrIHg2IE1hciBkZWwgU3VkIjogInBhY2steC02LWFydC00NzM4LTF0Z2h2IiwgIlBhY2sgeDYgTWFyIGRlbCBQbGF0YSI6ICJwYWNrLXgtNi1hcnQtOTAzMi0xN2FuYiIsICJQYWNrIHg2IEVsIFRvcmRpbGxvIjogInBhY2steC02LWFydC00ODI1LTFoY2Y4IiwgIlBhY2sgeDYgTWFyIGRlIENvYm8iOiAicGFjay14LTYtYXJ0LTQ3MzUtbWF1aS1mOHhhZyIsICJEb2NlbmEgTWFyIENoaXF1aXRhIjogImRvY2VuYS1iaWtpbmktYXJ0LTQ5NTAtamFjcXVhcmQtbWFsaWJ1IiwgIkRvY2VuYSBMYXMgVG9uaW5hcyI6ICJkb2NlbmEtYXJ0LTQ3MzUtamFjcXVhcmQtbWFsaWJ1IiwgIkRvY2VuYSBBcnJveW8gU2VjbyI6ICJkb2NlbmEtYXJ0LTkwNTAiLCAiRG9jZW5hIFNhbiBCZXJuYXJkbyI6ICJkb2NlbmEtYXJ0LTQ3MzUtdGVsYS1tYXVpLWNvcGlhLTFqY3NhIiwgIkRvY2VuYSBDb3N0YSBFc21lcmFsZGEiOiAiZG9jZW5hLWFydC00NzUwLWJhbWJ1bGEiLCAiRG9jZW5hIFZpbGxhIEdlc2VsbCBOb3J0ZSI6ICJkb2NlbmEtYXJ0LTQ3OTAtM2doNHgiLCAiRG9jZW5hIFB1bnRhIFJhc2EiOiAiZG9jZW5hLWFydC02MDcyLXJqdGQwIiwgIkRvY2VuYSBDYWJvIFBvbG9uaW8iOiAiZG9jZW5hLWFydC04MDIyLXdtdWVvIiwgIkRvY2VuYSBDb3N0YSBCb25pdGEiOiAiZG9jZW5hLWJpa2luaS1hcnQtNjA3MS1taWNyb2ZpYnJhLWJpY29sb3IiLCAiRG9jZW5hIE9yZW5zZSI6ICJkb2NlbmEtYmlraW5pLWFydC05MDQwLXJpbyIsICJEb2NlbmEgUmV0YSI6ICJkb2NlbmEtYmlraW5pLWFydC04MDIwLXJpbyIsICJEb2NlbmEgTWFyIEF6dWwiOiAiZG9jZW5hLWFydC00NzM2LWx1cmV4IiwgIkRvY2VuYSBNb250ZSBIZXJtb3NvIjogImRvY2VuYS1hcnQtODAzMi1tYXVpIiwgIkRvY2VuYSBNYXIgZGVsIFBsYXRhIjogImRvY2VuYS1hcnQtOTAzMi16eXhpMSIsICJEb2NlbmEgVmlsbGEgR2VzZWxsIjogImRvY2VuYS1iaWtpbmktYXJ0LTQ3NTAtYmFtYnVsYS1jb24tYWNjZXNvcmlvLWJpdzBjIiwgIkRvY2VuYSBPc3RlbmRlIjogImRvY2VuYS1hcnQtNDc1OC11ajh6dCIsICJEb2NlbmEgRWwgVG9yZGlsbG8iOiAiZG9jZW5hLWFydC00ODI1LWJicjBhIiwgIkRvY2VuYSBNYXIgZGVsIFN1ZCI6ICJkb2NlbmEtYXJ0LTQ3MzUtamFjcXVhcmQtbWFsaWJ1LWNvcGlhLTJoMHV2IiwgIkRvY2VuYSBQdW50YSBNw6lkYW5vcyI6ICJkb2NlbmEtYXJ0LTQ3NTctMW1hdjYiLCAiRG9jZW5hIFNhbnRhIENsYXJhIjogImRvY2VuYS1hcnQtNTAyMC1tYXVpIiwgIkRvY2VuYSBTYW4gRWR1YXJkbyI6ICJkb2NlbmEtYmlraW5pLWFydC02MDcxLXRyaWNvdCIsICJEb2NlbmEgUGVodWVuIEPDsyI6ICJkb2NlbmEtYmlraW5pLWFydC04MDQ0LW1hdWkiLCAiRG9jZW5hIFB1bnRhIEFsdGEiOiAiZG9jZW5hLWFydC05MDU0LXJpby14eXpjaSIsICJEb2NlbmEgQmFow61hIEJsYW5jYSI6ICJkb2NlbmEtYXJ0LTQ2NTAtMWp6M2giLCAiRG9jZW5hIFNhbiBDbGVtZW50ZSI6ICJkb2NlbmEtYXJ0LTgwODUtMTJ5NzkiLCAiRG9jZW5hIFB1bnRhIE1vZ290ZXMiOiAiZG9jZW5hLWJpa2luaS1hcnQtNDczNS1iYWxpIiwgIkRvY2VuYSBDYW1ldCBOb3J0ZSI6ICJkb2NlbmEtYXJ0LTUwNDUiLCAiRG9jZW5hIE1hciBkZSBDb2JvIjogImRvY2VuYS1hcnQtNDczNS1qYWNxdWFyZC1tYWxpYnUtY29waWEtMWU2b3QiLCAiRG9jZW5hIFF1ZXF1w6luIjogImRvY2VuYS1hcnQtOTAzMi1jb3BpYS0xMWI4NCIsICJEb2NlbmEgTWFyIGRlIGxhcyBQYW1wYXMiOiAiZG9jZW5hLWFydC02MDU1LTVyZXFwIiwgIkRvY2VuYSBDYWJvIENvcnJpZW50ZXMiOiAiZG9jZW5hLWJpa2luaS1hcnQtNDc1MSIsICJEb2NlbmEgUGxheWEgU2VyZW5hIjogImRvY2VuYS1hcnQtMTEzIiwgIkRvY2VuYSBMb3MgUG9jaXRvcyI6ICJkb2NlbmEtZW50ZXJpemEtYXJ0LTEzMC0xdWZsOCJ9fQ==", "base64").toString("utf8"));
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

const srcKey = (name, c) => {
  let k = canon(c);
  if (name === "Faro Querandí") k = k.replace(/ con accesorio.*$/, "");
  if (name === "Mar del Sud") k = k.replace(/ aro (dorado|plateado)$/, "");
  return k;
};

const raw = fs.readFileSync(ARCHIVO, "utf8");
const data = JSON.parse(raw);
const log = []; let fallas = 0, total = 0;

for (const it of data.items) {
  const slug = CFG.items[it.name];
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
    const k = srcKey(it.name, v.c);
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
