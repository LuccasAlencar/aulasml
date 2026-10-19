// Mapa interativo da aula de DBSCAN.
// Os pontos vêm do crimes.csv (dados inventados). Cada linha de DADOS é:
// [x_km, y_km, tipo, hora, K-Means com K=2, 3, 4, 5, 6]
// O site funciona sem este arquivo: sem JavaScript aparece só a imagem.
(function () {
  var DADOS = [[7.43,4.84,1,21,0,2,1,2,2],[5.1,3.59,1,11,1,1,0,1,4],[2.19,4.82,1,11,1,1,0,1,1],[7.54,5.54,1,19,0,2,1,2,2],[2.84,4.39,3,12,1,1,0,1,1],[2.48,4.63,0,14,1,1,0,1,1],[2.8,5.09,2,16,1,1,0,1,1],[5.33,1.34,0,17,1,0,2,4,3],[2.23,2.66,1,21,1,1,3,3,5],[2.69,5.25,2,19,1,1,0,1,1],[3.66,2.1,2,23,1,0,3,3,5],[7.39,4.61,0,17,0,2,1,2,2],[2.72,2.34,0,23,1,1,3,3,5],[3.35,4.68,0,15,1,1,0,1,1],[5.76,1.27,0,19,1,0,2,4,3],[6.85,1.47,0,23,0,0,2,0,0],[2.25,0.24,2,12,1,0,3,3,5],[2.69,4.78,0,17,1,1,0,1,1],[7.5,5.37,0,20,0,2,1,2,2],[3.17,6.76,1,5,1,1,0,1,1],[8.66,5.38,0,22,0,2,1,2,2],[8.49,3.16,0,20,0,2,2,0,0],[3.94,1.17,3,22,1,0,3,4,3],[7.65,5.19,1,14,0,2,1,2,2],[8.17,4.82,1,17,0,2,1,2,2],[2.78,4.94,0,10,1,1,0,1,1],[3.12,4.9,1,15,1,1,0,1,1],[3.23,2.02,0,19,1,0,3,3,5],[3.05,4.5,3,14,1,1,0,1,1],[3.21,4.85,0,11,1,1,0,1,1],[3.21,5.38,0,16,1,1,0,1,1],[3.16,4.72,1,12,1,1,0,1,1],[2.68,4.8,0,13,1,1,0,1,1],[7.62,5.5,1,19,0,2,1,2,2],[2.84,4.51,1,15,1,1,0,1,1],[4.18,5.28,1,12,1,1,0,1,1],[1.89,5.97,3,19,1,1,0,1,1],[9.41,6.38,0,14,0,2,1,2,2],[7.39,5.26,0,21,0,2,1,2,2],[2.96,5.02,1,14,1,1,0,1,1],[8.75,2.27,0,21,0,0,2,0,0],[2.52,5.16,1,17,1,1,0,1,1],[2.45,5.01,0,10,1,1,0,1,1],[7.68,0.84,0,18,0,0,2,0,0],[2.76,4.24,0,14,1,1,0,1,1],[2.73,4.69,0,18,1,1,0,1,1],[3.16,2.28,2,21,1,0,3,3,5],[7.15,5.16,0,17,0,2,1,2,2],[2.33,2.53,0,19,1,1,3,3,5],[1.05,2.34,2,19,1,1,3,3,5],[1.35,2.44,2,22,1,1,3,3,5],[2.08,2.46,1,22,1,1,3,3,5],[9.71,2.21,1,23,0,0,2,0,0],[7.52,4.87,0,23,0,2,1,2,2],[2.79,4.92,2,17,1,1,0,1,1],[8.03,5.81,0,15,0,2,1,2,2],[2.89,4.62,1,13,1,1,0,1,1],[7.71,5.01,0,19,0,2,1,2,2],[3.0,2.09,0,19,1,0,3,3,5],[7.37,6.26,1,19,0,2,1,2,2],[8.02,5.24,0,20,0,2,1,2,2],[5.36,1.19,0,21,1,0,2,4,3],[4.25,3.29,0,11,1,1,3,3,4],[7.78,5.23,1,18,0,2,1,2,2],[2.83,4.59,0,14,1,1,0,1,1],[7.82,5.66,0,19,0,2,1,2,2],[1.86,2.4,3,23,1,1,3,3,5],[2.35,4.63,1,11,1,1,0,1,1],[8.88,6.37,3,6,0,2,1,2,2],[3.21,5.13,0,19,1,1,0,1,1],[2.82,5.34,2,14,1,1,0,1,1],[2.22,5.14,0,11,1,1,0,1,1],[7.1,6.01,1,18,0,2,1,2,2],[1.66,2.41,2,20,1,1,3,3,5],[7.54,1.62,2,21,0,0,2,0,0],[2.22,5.15,0,11,1,1,0,1,1],[5.54,1.33,0,20,1,0,2,4,3],[2.7,4.6,1,12,1,1,0,1,1],[3.08,4.94,0,8,1,1,0,1,1],[2.8,4.75,2,13,1,1,0,1,1],[7.16,5.15,1,14,0,2,1,2,2],[2.59,5.56,0,15,1,1,0,1,1],[5.05,1.65,1,20,1,0,2,4,3],[4.58,1.54,1,23,1,0,2,4,3],[7.43,5.62,1,20,0,2,1,2,2],[1.75,3.96,1,6,1,1,0,1,1],[4.31,5.15,1,20,1,1,0,1,1],[0.48,4.17,3,0,1,1,0,1,1],[1.11,1.42,1,0,1,1,3,3,5],[5.64,1.48,3,21,1,0,2,4,3],[2.66,4.8,1,16,1,1,0,1,1],[3.44,1.91,0,20,1,0,3,3,5],[7.34,4.95,1,19,0,2,1,2,2],[3.56,2.18,0,20,1,0,3,3,5],[2.3,4.74,0,14,1,1,0,1,1],[7.79,1.86,0,18,0,0,2,0,0],[4.75,1.43,2,23,1,0,2,4,3],[3.98,0.69,2,12,1,0,3,4,3],[4.9,1.32,3,23,1,0,2,4,3],[8.2,5.71,1,16,0,2,1,2,2],[8.18,4.64,1,18,0,2,1,2,2],[4.76,1.61,1,20,1,0,2,4,3],[7.68,4.91,1,20,0,2,1,2,2],[2.81,4.55,0,17,1,1,0,1,1],[7.82,6.03,3,18,0,2,1,2,2],[2.57,4.79,2,20,1,1,0,1,1],[4.63,1.46,1,22,1,0,2,4,3],[2.87,4.75,0,18,1,1,0,1,1],[7.22,5.86,0,13,0,2,1,2,2],[7.92,5.34,2,14,0,2,1,2,2],[2.73,4.53,0,15,1,1,0,1,1],[5.19,1.37,1,20,1,0,2,4,3],[8.14,4.72,0,16,0,2,1,2,2],[7.63,5.28,1,12,0,2,1,2,2],[8.28,2.14,0,21,0,0,2,0,0],[7.95,4.56,1,15,0,2,1,2,2],[5.4,0.75,1,9,1,0,2,4,3],[2.64,2.63,2,21,1,1,3,3,5],[2.79,5.12,0,14,1,1,0,1,1],[7.78,5.38,1,18,0,2,1,2,2],[8.79,4.19,3,9,0,2,1,2,2],[0.35,2.37,1,9,1,1,3,3,5],[5.61,3.83,2,18,0,2,1,2,4],[7.53,5.52,0,18,0,2,1,2,2],[2.64,4.7,2,14,1,1,0,1,1],[1.56,2.51,0,21,1,1,3,3,5],[8.21,5.43,1,17,0,2,1,2,2],[7.42,1.85,1,22,0,0,2,0,0],[8.36,5.66,1,21,0,2,1,2,2],[4.27,3.23,3,6,1,1,3,3,4],[2.36,4.64,3,12,1,1,0,1,1],[2.59,4.48,0,14,1,1,0,1,1],[4.73,6.54,3,11,0,2,0,1,1],[3.59,1.99,2,23,1,0,3,3,5],[6.24,0.99,3,18,1,0,2,4,3],[7.67,4.81,0,18,0,2,1,2,2],[2.85,4.84,0,12,1,1,0,1,1],[7.73,5.07,2,14,0,2,1,2,2],[6.34,4.04,1,11,0,2,1,2,4],[8.51,5.52,1,19,0,2,1,2,2],[5.57,1.26,0,22,1,0,2,4,3],[2.92,4.86,2,14,1,1,0,1,1],[2.1,5.18,1,13,1,1,0,1,1],[7.68,5.39,2,22,0,2,1,2,2],[1.97,4.72,0,17,1,1,0,1,1],[2.76,2.22,2,22,1,1,3,3,5],[3.15,4.63,0,10,1,1,0,1,1],[4.22,1.8,2,22,1,0,3,4,3],[9.72,4.11,0,9,0,2,1,2,2],[6.96,1.48,2,21,0,0,2,0,0],[2.85,5.64,1,19,1,1,0,1,1],[8.38,5.4,1,19,0,2,1,2,2],[7.73,5.9,1,18,0,2,1,2,2],[7.29,5.32,1,19,0,2,1,2,2],[7.42,4.79,1,20,0,2,1,2,2],[8.38,1.96,0,21,0,0,2,0,0],[5.58,1.52,1,23,1,0,2,4,3],[1.81,2.42,2,22,1,1,3,3,5],[8.01,6.04,2,19,0,2,1,2,2],[7.54,1.52,1,22,0,0,2,0,0],[7.95,5.16,0,19,0,2,1,2,2],[7.15,5.55,1,20,0,2,1,2,2],[7.41,4.71,2,18,0,2,1,2,2],[1.33,2.46,3,20,1,1,3,3,5],[5.8,5.96,3,6,0,2,1,2,2],[1.53,2.46,3,20,1,1,3,3,5],[1.6,2.62,1,20,1,1,3,3,5],[7.55,5.36,3,19,0,2,1,2,2],[4.5,1.66,2,21,1,0,2,4,3],[3.12,2.23,2,22,1,0,3,3,5],[2.78,4.64,0,15,1,1,0,1,1],[3.98,2.05,2,23,1,0,3,4,3],[4.03,4.79,2,6,1,1,0,1,1],[7.5,1.79,0,22,0,0,2,0,0],[5.47,1.25,2,19,1,0,2,4,3],[3.26,4.42,0,11,1,1,0,1,1],[1.52,6.11,3,18,1,1,0,1,1],[7.77,5.49,1,12,0,2,1,2,2],[7.31,5.28,1,19,0,2,1,2,2],[1.59,2.47,0,20,1,1,3,3,5],[7.02,1.6,1,23,0,0,2,0,0],[1.3,2.16,3,11,1,1,3,3,5],[7.6,5.87,0,11,0,2,1,2,2],[8.07,5.24,1,21,0,2,1,2,2],[2.59,2.51,0,23,1,1,3,3,5],[7.1,0.4,0,12,0,0,2,0,0],[5.6,2.11,1,16,1,0,2,4,3],[6.58,6.27,1,19,0,2,1,2,2],[5.89,0.98,1,0,1,0,2,4,3],[2.36,4.75,2,16,1,1,0,1,1],[7.36,5.72,0,15,0,2,1,2,2],[2.87,5.06,1,14,1,1,0,1,1],[2.74,5.13,2,11,1,1,0,1,1],[5.4,1.17,0,20,1,0,2,4,3],[2.83,4.7,2,13,1,1,0,1,1],[7.72,5.38,1,14,0,2,1,2,2],[2.61,4.84,0,14,1,1,0,1,1],[7.99,2.14,3,8,0,0,2,0,0],[7.44,1.7,3,23,0,0,2,0,0],[7.8,5.05,1,18,0,2,1,2,2],[3.25,4.39,1,15,1,1,0,1,1],[2.43,5.02,0,9,1,1,0,1,1],[7.56,5.11,2,2,0,2,1,2,2],[2.01,3.61,3,2,1,1,3,3,5],[5.17,1.28,1,20,1,0,2,4,3],[2.79,5.19,1,19,1,1,0,1,1],[5.05,3.48,2,16,1,1,3,4,4],[1.51,2.63,0,4,1,1,3,3,5],[1.5,2.43,2,20,1,1,3,3,5],[3.01,4.24,2,13,1,1,0,1,1],[7.08,1.8,0,23,0,0,2,0,0],[3.18,2.23,3,21,1,0,3,3,5],[3.3,2.2,2,21,1,0,3,3,5],[7.08,5.81,0,19,0,2,1,2,2],[7.46,5.29,0,19,0,2,1,2,2],[2.61,4.86,0,18,1,1,0,1,1],[4.93,1.4,0,17,1,0,2,4,3],[3.18,5.12,2,13,1,1,0,1,1],[2.78,4.81,0,19,1,1,0,1,1],[2.62,4.9,0,13,1,1,0,1,1],[6.18,1.1,2,23,1,0,2,4,3],[7.25,5.6,3,20,0,2,1,2,2],[2.67,0.59,3,8,1,0,3,3,5],[5.71,1.37,0,20,1,0,2,4,3],[2.38,4.99,3,16,1,1,0,1,1],[3.03,5.07,2,11,1,1,0,1,1],[5.66,1.28,2,23,1,0,2,4,3],[7.92,1.94,2,23,0,0,2,0,0],[2.17,2.08,0,15,1,1,3,3,5],[2.17,4.47,2,15,1,1,0,1,1],[2.37,2.51,2,22,1,1,3,3,5],[2.57,6.46,0,16,1,1,0,1,1],[3.27,4.68,1,13,1,1,0,1,1],[2.72,5.4,0,17,1,1,0,1,1],[7.5,4.86,1,22,0,2,1,2,2],[2.46,4.87,2,14,1,1,0,1,1],[8.62,0.53,3,8,0,0,2,0,0],[2.4,4.93,0,16,1,1,0,1,1],[7.61,5.41,1,19,0,2,1,2,2],[6.49,1.2,1,22,1,0,2,4,3],[2.54,2.44,2,21,1,1,3,3,5],[2.0,2.58,3,21,1,1,3,3,5],[7.11,6.69,3,0,0,2,1,2,2],[3.12,4.96,2,13,1,1,0,1,1],[3.26,5.94,1,11,1,1,0,1,1],[2.38,2.45,1,22,1,1,3,3,5],[8.39,2.2,2,19,0,0,2,0,0],[7.44,4.97,1,21,0,2,1,2,2],[2.65,4.87,0,9,1,1,0,1,1],[7.79,5.36,0,16,0,2,1,2,2],[2.65,4.57,0,17,1,1,0,1,1],[8.37,2.19,0,21,0,0,2,0,0],[4.76,1.67,2,23,1,0,2,4,3],[2.53,4.69,0,16,1,1,0,1,1],[6.66,3.82,2,10,0,2,1,2,4],[7.94,1.89,2,21,0,0,2,0,0],[2.37,5.01,0,14,1,1,0,1,1],[8.03,5.28,3,22,0,2,1,2,2],[6.87,1.4,2,22,0,0,2,0,0],[8.08,1.93,1,23,0,0,2,0,0],[6.71,1.55,1,21,0,0,2,0,0],[5.95,1.2,3,22,1,0,2,4,3],[7.26,5.62,2,16,0,2,1,2,2],[2.39,2.54,2,19,1,1,3,3,5],[8.19,5.38,1,21,0,2,1,2,2],[2.71,4.61,0,11,1,1,0,1,1],[7.73,5.38,0,16,0,2,1,2,2],[1.24,4.51,2,6,1,1,0,1,1],[4.73,1.53,2,17,1,0,2,4,3],[4.32,3.27,2,11,1,1,3,3,4],[3.09,5.63,2,10,1,1,0,1,1],[4.79,1.68,2,19,1,0,2,4,3],[7.88,1.78,2,21,0,0,2,0,0],[3.95,1.85,1,23,1,0,3,4,3],[2.8,5.0,0,10,1,1,0,1,1],[2.74,4.83,1,13,1,1,0,1,1],[2.78,5.12,1,13,1,1,0,1,1],[8.63,2.19,1,23,0,0,2,0,0],[2.24,4.23,1,12,1,1,0,1,1],[2.84,4.92,1,13,1,1,0,1,1],[6.91,1.42,2,22,0,0,2,0,0],[3.1,5.28,2,19,1,1,0,1,1],[3.17,2.27,1,21,1,0,3,3,5],[2.79,5.13,3,16,1,1,0,1,1],[7.1,6.06,0,11,0,2,1,2,2],[7.36,5.34,1,17,0,2,1,2,2],[7.82,4.66,0,14,0,2,1,2,2],[7.75,5.15,1,19,0,2,1,2,2],[2.75,4.58,0,13,1,1,0,1,1],[7.4,5.11,1,16,0,2,1,2,2],[4.65,2.9,2,1,1,0,3,4,4],[7.94,4.99,1,18,0,2,1,2,2],[2.82,5.09,1,14,1,1,0,1,1],[7.91,5.19,0,20,0,2,1,2,2],[7.22,4.89,0,20,0,2,1,2,2],[8.11,5.48,1,17,0,2,1,2,2],[7.5,5.45,0,18,0,2,1,2,2],[1.62,2.51,2,21,1,1,3,3,5],[4.14,1.81,2,21,1,0,3,4,3],[7.78,5.72,1,18,0,2,1,2,2],[1.03,2.66,2,12,1,1,3,3,5],[2.98,2.29,1,9,1,1,3,3,5],[7.6,4.99,0,17,0,2,1,2,2],[2.13,2.35,1,21,1,1,3,3,5],[7.51,5.46,1,18,0,2,1,2,2]];
  var TIPOS = ["furto", "roubo", "vandalismo", "outros"];
  var CORES = ["#168A5B", "#B8860B", "#2F6DB5", "#7A5AA6", "#C2532D", "#3A8F9E", "#8A8A2B", "#B04A7D"];
  var CINZA = "#9A9A9A";
  var NS = "http://www.w3.org/2000/svg";

  var raiz = document.getElementById("mapa-dbscan");
  if (!raiz) return;
  var n = DADOS.length;

  // padroniza as coordenadas (média 0, desvio 1), como o StandardScaler
  var mx = 0, my = 0, sx = 0, sy = 0, i, j;
  for (i = 0; i < n; i++) { mx += DADOS[i][0]; my += DADOS[i][1]; }
  mx /= n; my /= n;
  for (i = 0; i < n; i++) { sx += Math.pow(DADOS[i][0] - mx, 2); sy += Math.pow(DADOS[i][1] - my, 2); }
  sx = Math.sqrt(sx / n); sy = Math.sqrt(sy / n);
  var Z = DADOS.map(function (d) { return [(d[0] - mx) / sx, (d[1] - my) / sy]; });

  // distâncias entre todos os pares (só uma vez)
  var dist = [];
  for (i = 0; i < n; i++) {
    dist.push(new Float32Array(n));
    for (j = 0; j < n; j++) dist[i][j] = Math.hypot(Z[i][0] - Z[j][0], Z[i][1] - Z[j][1]);
  }

  function dbscan(eps, minS) {
    var viz = [], eCentral = [], rot = [], tipo = [];
    for (i = 0; i < n; i++) {
      var lista = [];
      for (j = 0; j < n; j++) if (dist[i][j] <= eps) lista.push(j); // inclui o próprio ponto
      viz.push(lista);
      eCentral.push(lista.length >= minS);
      rot.push(-2); // -2 = ainda não visitado
    }
    var grupo = 0;
    for (i = 0; i < n; i++) {
      if (rot[i] !== -2) continue;
      if (!eCentral[i]) { rot[i] = -1; continue; } // talvez vire ponto de borda depois
      var fila = [i]; rot[i] = grupo;
      while (fila.length) {
        var p = fila.pop();
        for (var m = 0; m < viz[p].length; m++) {
          var q = viz[p][m], estavaLivre = rot[q] === -2;
          if (rot[q] === -2 || rot[q] === -1) {
            rot[q] = grupo;
            if (estavaLivre && eCentral[q]) fila.push(q);
          }
        }
      }
      grupo++;
    }
    for (i = 0; i < n; i++) tipo.push(eCentral[i] ? "central" : (rot[i] >= 0 ? "borda" : "ruido"));
    return { rot: rot, tipo: tipo, viz: viz, grupos: grupo };
  }

  // ---------- desenho ----------
  var svg = document.getElementById("mapa-svg");
  var X0 = 48, Y0 = 14, ESC = 80, LARG = 800, ALT = 560;
  function px(x) { return X0 + x * ESC; }
  function py(y) { return Y0 + (7 - y) * ESC; }
  function el(nome, attrs, pai) {
    var e = document.createElementNS(NS, nome);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    (pai || svg).appendChild(e);
    return e;
  }

  for (i = 0; i <= 10; i++) el("line", { "class": "grid", x1: px(i), x2: px(i), y1: Y0, y2: Y0 + ALT });
  for (i = 0; i <= 7; i++) el("line", { "class": "grid", x1: X0, x2: X0 + LARG, y1: py(i), y2: py(i) });
  for (i = 0; i <= 10; i += 2) { var t = el("text", { "class": "axis-label", x: px(i), y: Y0 + ALT + 20, "text-anchor": "middle" }); t.textContent = i; }
  for (i = 0; i <= 6; i += 2) { var t2 = el("text", { "class": "axis-label", x: X0 - 10, y: py(i) + 4, "text-anchor": "end" }); t2.textContent = i; }
  var tx = el("text", { "class": "axis-label", x: X0 + LARG, y: Y0 + ALT + 36, "text-anchor": "end" }); tx.textContent = "x (km)";
  var ty = el("text", { "class": "axis-label", x: X0 + 4, y: Y0 + 12 }); ty.textContent = "y (km)";

  // o rio (só enfeite do mapa)
  var caminho = "";
  for (i = 0; i <= 40; i++) {
    var rx = i * 0.25, ry = 1.9 + 0.6 * Math.sin(rx * 0.8);
    caminho += (i ? "L" : "M") + px(rx).toFixed(1) + " " + py(ry).toFixed(1);
  }
  el("path", { "class": "river", d: caminho });
  [["Centro", 2.8, 4.0], ["Terminal", 7.8, 4.35], ["Orla do rio", 5.7, 0.45]].forEach(function (l) {
    var tt = el("text", { "class": "place", x: px(l[1]), y: py(l[2]), "text-anchor": "middle" });
    tt.textContent = l[0];
  });

  var pts = [];
  for (i = 0; i < n; i++) {
    var c = el("circle", { "class": "pt", cx: px(DADOS[i][0]).toFixed(1), cy: py(DADOS[i][1]).toFixed(1), r: 4.5, "data-i": i });
    pts.push(c);
  }

  // ---------- controles ----------
  var elEps = document.getElementById("ctl-eps"), outEps = document.getElementById("out-eps");
  var elMin = document.getElementById("ctl-min"), outMin = document.getElementById("out-min");
  var elK = document.getElementById("ctl-k"), outK = document.getElementById("out-k");
  var elTipos = document.getElementById("ctl-tipos");
  var btnDb = document.getElementById("modo-dbscan"), btnKm = document.getElementById("modo-kmeans");
  var boxDb = document.getElementById("ctl-dbscan"), boxKm = document.getElementById("ctl-kmeans");
  var resumo = raiz.querySelector(".mapa-resumo"), dica = raiz.querySelector(".mapa-dica");
  var info = raiz.querySelector(".mapa-info"), legenda = raiz.querySelector(".legenda");
  var INFO_PADRAO = "Passe o mouse (ou toque) em um ponto para ver os vizinhos dele.";

  var modo = "dbscan", res = null, fixo = -1;

  function fmt(v) { return String(v).replace(".", ","); }

  function atualizar() {
    var mostrarTipos = elTipos.checked;
    var larg = svg.getBoundingClientRect().width || 860, kk = Math.min(2, Math.max(1, 700 / larg));
    var rot, tipo, txt = "", dc = "", cont = {}, ruido = 0, ngr;
    if (modo === "dbscan") {
      var eps = parseFloat(elEps.value), minS = parseInt(elMin.value, 10);
      outEps.textContent = fmt(eps.toFixed(2)); outMin.textContent = minS;
      res = dbscan(eps, minS); rot = res.rot; tipo = res.tipo; ngr = res.grupos;
    } else {
      var K = parseInt(elK.value, 10); outK.textContent = K;
      res = null; rot = DADOS.map(function (d) { return d[4 + (K - 2)]; });
      tipo = rot.map(function () { return "central"; }); ngr = K;
    }
    for (i = 0; i < n; i++) {
      var p = pts[i], cor = rot[i] < 0 ? CINZA : CORES[rot[i] % CORES.length];
      p.setAttribute("class", "pt");
      if (rot[i] < 0) {
        ruido++;
        p.setAttribute("r", (3.8 * kk).toFixed(1)); p.setAttribute("fill", "#fff"); p.setAttribute("stroke", CINZA); p.setAttribute("stroke-width", 1.5);
      } else if (modo === "dbscan" && mostrarTipos && tipo[i] === "borda") {
        p.setAttribute("r", (4 * kk).toFixed(1)); p.setAttribute("fill", "#fff"); p.setAttribute("stroke", cor); p.setAttribute("stroke-width", 2);
      } else {
        p.setAttribute("r", ((modo === "dbscan" && mostrarTipos ? 5.2 : 4.5) * kk).toFixed(1)); p.setAttribute("fill", cor); p.setAttribute("stroke", "#fff"); p.setAttribute("stroke-width", 1);
      }
      if (rot[i] >= 0) cont[rot[i]] = (cont[rot[i]] || 0) + 1;
    }

    var pct = Math.round(100 * ruido / n);
    if (modo === "dbscan") {
      txt = ngr + (ngr === 1 ? " grupo" : " grupos") + " · " + ruido + " pontos de ruído (" + pct + "%)";
      if (ngr === 0) dc = "Nenhum grupo: o eps está pequeno demais (ou o min_samples, alto demais) e tudo virou ruído.";
      else if (ruido / n > 0.5) dc = "Quase tudo virou ruído: o eps está pequeno demais, ou o min_samples, alto demais.";
      else if (ngr === 1 && ruido / n < 0.05) dc = "Tudo virou um grupo só: o eps está grande demais e as regiões se fundiram.";
      else if (ngr >= 8) dc = "Grupos demais: as regiões se quebraram em pedacinhos. Aumente o eps.";
      else if (ngr === 3) dc = "Três regiões bem separadas, e os pontos isolados ficaram de fora como ruído.";
      else if (ngr === 2) dc = "Duas regiões: duas das três foram unidas, ou uma delas sumiu como ruído.";
      else dc = "Compare com o mapa: os grupos ainda fazem sentido?";
    } else {
      txt = ngr + " grupos · 0 pontos de ruído";
      dc = "O K-Means coloca todo ponto em algum grupo, até os isolados. Repare no que acontece com a região do rio.";
    }
    resumo.textContent = txt; dica.textContent = dc;

    // legenda
    legenda.innerHTML = "";
    var chaves = Object.keys(cont).map(Number).sort(function (a, b) { return a - b; });
    if (chaves.length <= 8) {
      chaves.forEach(function (k) { addLeg("sw", CORES[k % CORES.length], "Grupo " + (k + 1) + ": " + cont[k]); });
    } else {
      addLeg("sw", CORES[0], chaves.length + " grupos pequenos");
    }
    if (ruido) addLeg("sw noise", "", "Ruído: " + ruido);
    if (modo === "dbscan" && mostrarTipos) addLeg("sw border", "", "Borda (anel)");
    mostrarInfo(fixo);
  }

  function addLeg(cls, cor, texto) {
    var li = document.createElement("li"), s = document.createElement("span");
    s.className = cls; if (cor) s.style.background = cor;
    li.appendChild(s); li.appendChild(document.createTextNode(texto)); legenda.appendChild(li);
  }

  function mostrarInfo(k) {
    pts.forEach(function (p) { p.classList.remove("nb"); p.classList.remove("me"); });
    if (k < 0) { info.textContent = INFO_PADRAO; return; }
    var d = DADOS[k], base = "Ocorrência " + (k + 1) + " · " + TIPOS[d[2]] + " · " + d[3] + "h. ";
    if (modo === "kmeans") {
      info.textContent = base + "Está no grupo " + (d[4 + (parseInt(elK.value, 10) - 2)] + 1) + " do K-Means, que não deixa ninguém de fora.";
      pts[k].classList.add("me"); return;
    }
    var eps = parseFloat(elEps.value), minS = parseInt(elMin.value, 10), v = res.viz[k];
    v.forEach(function (q) { pts[q].classList.add("nb"); });
    pts[k].classList.add("me");
    var cont = v.length + (v.length === 1 ? " ponto" : " pontos") + " no raio (contando ele mesmo)";
    var t = res.tipo[k];
    if (t === "central") info.textContent = base + "Ponto central: " + cont + ", e o mínimo é " + minS + ". Por isso ele puxa os vizinhos para o grupo.";
    else if (t === "borda") info.textContent = base + "Ponto de borda: só " + cont + ", menos que " + minS + ", mas está dentro do raio de um ponto central e entra no grupo dele.";
    else info.textContent = base + "Ruído: só " + cont + ", menos que " + minS + ", e nenhum ponto central por perto. Fica de fora (rótulo -1).";
  }

  pts.forEach(function (p) {
    p.addEventListener("pointerenter", function () { fixo = parseInt(p.getAttribute("data-i"), 10); mostrarInfo(fixo); });
    p.addEventListener("pointerdown", function () { fixo = parseInt(p.getAttribute("data-i"), 10); mostrarInfo(fixo); });
  });
  svg.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") { fixo = -1; mostrarInfo(-1); } });

  function trocarModo(m) {
    modo = m; fixo = -1;
    btnDb.setAttribute("aria-pressed", m === "dbscan"); btnKm.setAttribute("aria-pressed", m === "kmeans");
    boxDb.hidden = m !== "dbscan"; boxKm.hidden = m !== "kmeans";
    atualizar();
  }
  btnDb.addEventListener("click", function () { trocarModo("dbscan"); });
  btnKm.addEventListener("click", function () { trocarModo("kmeans"); });
  [elEps, elMin, elK, elTipos].forEach(function (c) { c.addEventListener("input", function () { fixo = -1; atualizar(); }); });
  raiz.querySelectorAll("[data-eps]").forEach(function (b) {
    b.addEventListener("click", function () {
      elEps.value = b.getAttribute("data-eps"); elMin.value = 4;
      if (modo !== "dbscan") trocarModo("dbscan"); else { fixo = -1; atualizar(); }
    });
  });

  var espera; window.addEventListener("resize", function () { clearTimeout(espera); espera = setTimeout(atualizar, 150); });
  raiz.hidden = false;
  atualizar();
  // para testes
  window.__mapa = { dbscan: dbscan, n: n };
})();
