// Dendrograma interativo da aula de Hierarchical clustering.
// As junções (linkage) foram calculadas com o scipy a partir do compras.csv
// e ficam guardadas em DADOS. O navegador só desenha a árvore e aplica o corte.
// O site funciona sem este arquivo: sem JavaScript aparece só a imagem.
(function () {
  var raiz = document.getElementById("hc-widget");
  if (!raiz) return;

  var DADOS = {"pontos":[[1001,13,4633.76],[1002,16,9668.8],[1003,18,7500.21],[1004,15,7211.79],[1005,15,7920.94],[1006,16,9216.67],[1007,18,10218.94],[1008,18,9316.95],[1009,14,6459.38],[1010,12,6804.88],[1011,17,7018.07],[1012,17,8323.47],[1013,17,5809.36],[1014,15,6967.18],[1015,13,5182.62],[1016,5,1114.28],[1017,6,1187.76],[1018,4,956.61],[1019,6,1206.92],[1020,7,1613.58],[1021,5,487.52],[1022,8,1851.05],[1023,5,731.03],[1024,4,980.39],[1025,5,923.3],[1026,7,1158.45],[1027,7,1268.18],[1028,8,1515.5],[1029,4,711.74],[1030,5,887.24],[1031,5,963.81],[1032,8,1943.67],[1033,8,2059.43],[1034,6,1002.78],[1035,8,1155.22],[1036,4,950.04],[1037,5,1334.37],[1038,8,1690.35],[1039,7,1121.42],[1040,4,425.26],[1041,2,178.71],[1042,1,178.13],[1043,2,141.13],[1044,1,117.44],[1045,1,56.05],[1046,2,169.05],[1047,1,281.76],[1048,2,328.61],[1049,2,337.54],[1050,2,239.83],[1051,2,233.67],[1052,2,265.25],[1053,2,228.39],[1054,1,39.9],[1055,1,75.16],[1056,2,28.87],[1057,2,102.89],[1058,1,72.55],[1059,1,206.93],[1060,2,267.62]],"metodos":{"single":{"z":[[51,59,0.0007713122559082075],[54,57,0.0008494198261267405],[50,52,0.0017183665448083918],[49,62,0.0020047609689428647],[17,35,0.00213819473473309],[47,48,0.0029062525085488122],[40,45,0.0031438297012968963],[44,53,0.005255988579290549],[61,67,0.0053698954525258635],[16,18,0.006235587689114919],[23,64,0.007739158415822178],[60,63,0.008272893478982413],[42,66,0.009086514002092372],[41,58,0.009372908426226956],[24,29,0.011735662425338411],[25,38,0.01205134718830514],[56,72,0.0124451395214904],[30,74,0.013183906956474256],[43,68,0.013759950286836187],[71,76,0.016168267035241657],[73,78,0.01975145181901805],[65,79,0.019849086281791384],[55,81,0.02408967644824056],[46,80,0.02435328949772808],[21,31,0.03014301314017881],[26,75,0.035711432000343435],[32,84,0.037673884702084756],[15,77,0.048970192044943905],[22,87,0.05083826476600439],[37,86,0.052299527225509984],[27,89,0.05690461938631247],[33,69,0.060201409745954115],[36,88,0.07162789637251077],[28,70,0.07755430826284393],[20,92,0.07924989343300515],[3,13,0.07960788646317374],[39,93,0.09323440298421959],[19,85,0.11240981147287582],[34,90,0.11725248082642642],[1,5,0.14714489884548687],[0,14,0.1786255041256588],[82,83,0.18094392022578215],[97,98,0.1809468752230584],[94,96,0.18095899355827597],[91,102,0.18119507996023765],[103,104,0.18138775575987723],[4,95,0.2307915975853787],[2,10,0.2395034795716333],[8,106,0.24505589936034564],[6,7,0.29355103025599005],[11,107,0.3233053415263411],[99,110,0.34240552082941045],[108,111,0.36226643283076654],[101,105,0.3630119460073974],[109,112,0.36335625981167474],[9,114,0.37895375711860535],[12,115,0.3933725049953085],[100,116,0.45320736803287537],[113,117,1.2330628880667518]],"ordem":[55,47,48,51,59,49,50,52,56,42,40,45,46,41,58,43,54,57,44,53,20,36,22,15,30,24,29,39,28,23,17,35,33,16,18,19,26,25,38,34,27,37,32,21,31,0,14,12,9,6,7,8,4,3,13,1,5,11,2,10]},"complete":{"z":[[51,59,0.0007713122559082075],[54,57,0.0008494198261267405],[50,52,0.0017183665448083918],[17,35,0.00213819473473309],[47,48,0.0029062525085488122],[40,45,0.0031438297012968963],[49,62,0.0037231275137512565],[44,53,0.005255988579290549],[16,18,0.006235587689114919],[41,58,0.009372908426226956],[23,63,0.009877353150555268],[61,67,0.011475303857943153],[24,29,0.011735662425338411],[25,38,0.01205134718830514],[42,65,0.012230343703389268],[60,66,0.012767333248641877],[55,56,0.02408967644824056],[30,72,0.024919569381812667],[43,71,0.02523525414477934],[21,31,0.03014301314017881],[46,69,0.03372619792395504],[64,75,0.03552267203898207],[26,73,0.047762779188648574],[74,76,0.04876515967312023],[27,37,0.05690461938631247],[33,68,0.06643699743506903],[32,79,0.06781689784226357],[15,36,0.07162789637251077],[22,77,0.07575783414781706],[78,80,0.07871290388775243],[3,13,0.07960788646317374],[28,70,0.0874316614133992],[81,83,0.10045609874734396],[1,5,0.14714489884548687],[20,88,0.1550077275808222],[19,82,0.1601725906615244],[34,84,0.1741571002127389],[0,14,0.1786255041256588],[39,91,0.1806660643976188],[89,92,0.2052407538815223],[85,87,0.21068078717860003],[2,10,0.2395034795716333],[94,98,0.2519132513171158],[95,96,0.2588896941698018],[6,7,0.29355103025599005],[8,90,0.3044703960936142],[86,103,0.35486995242416186],[4,11,0.3848692836292232],[100,102,0.4423537734924451],[93,104,0.487196685436567],[9,105,0.5587514738777518],[101,107,0.5598345124228165],[12,111,0.818212597342419],[106,108,0.8981659119725891],[97,110,0.9137336871528675],[112,114,1.4020678124123278],[99,113,1.4269805224407128],[109,115,2.030394561492668],[116,117,4.5206600703772075]],"ordem":[43,54,57,44,53,46,41,58,47,48,51,59,49,50,52,42,40,45,55,56,32,21,31,19,26,25,38,34,27,37,33,16,18,15,36,20,22,30,24,29,39,28,23,17,35,1,5,6,7,12,2,10,4,11,0,14,9,8,3,13]},"average":{"z":[[51,59,0.0007713122559082075],[54,57,0.0008494198261267405],[50,52,0.0017183665448083918],[17,35,0.00213819473473309],[49,62,0.0028639442413470606],[47,48,0.0029062525085488122],[40,45,0.0031438297012968963],[44,53,0.005255988579290549],[16,18,0.006235587689114919],[61,67,0.008422599655234508],[23,63,0.008808255783188723],[41,58,0.009372908426226956],[60,64,0.010567845767834557],[42,66,0.01065842885274082],[24,29,0.011735662425338411],[25,38,0.01205134718830514],[43,69,0.01839596002751681],[30,74,0.019051738169143462],[56,73,0.019550758756650948],[65,72,0.02802857612472063],[46,71,0.02903974371084156],[21,31,0.03014301314017881],[55,78,0.03875274551572877],[26,75,0.041737105594496005],[79,82,0.04798036456282895],[76,80,0.0488345886244255],[32,81,0.05274539127217416],[27,37,0.05690461938631247],[15,77,0.06167135082437288],[33,68,0.06331920359051157],[22,88,0.0784745130744813],[3,13,0.07960788646317374],[28,70,0.08155949089127339],[86,87,0.11340514057948034],[36,90,0.13357631210568668],[19,83,0.14023454853587317],[1,5,0.14714489884548687],[39,92,0.15440402115267463],[20,94,0.1642922225768713],[0,14,0.1786255041256588],[84,85,0.1867725280147166],[34,95,0.19534285380785937],[89,98,0.20955839376747068],[2,10,0.2395034795716333],[93,101,0.24921625226214048],[97,102,0.26237802001601934],[4,91,0.2705955408169656],[6,7,0.29355103025599005],[8,106,0.35281396434459317],[11,103,0.37407271693672584],[96,107,0.4084702029501316],[9,108,0.5340606389535059],[104,105,0.5444694790414251],[12,109,0.5969515654111182],[111,113,0.650092744372977],[100,112,0.8566775806894522],[99,114,0.9081936751322127],[110,116,1.0587296226479808],[115,117,3.056875693580634]],"ordem":[47,48,51,59,49,50,52,55,56,42,40,45,43,54,57,44,53,46,41,58,32,21,31,27,37,34,19,26,25,38,39,28,23,17,35,33,16,18,20,36,22,15,30,24,29,1,5,6,7,0,14,9,8,4,3,13,12,11,2,10]},"ward":{"z":[[51,59,0.0007713122559082075],[54,57,0.0008494198261267405],[50,52,0.0017183665448083918],[17,35,0.00213819473473309],[47,48,0.0029062525085488122],[40,45,0.0031438297012968963],[49,62,0.003306997957371608],[44,53,0.005255988579290549],[16,18,0.006235587689114919],[41,58,0.009372908426226956],[23,63,0.010170897695030174],[24,29,0.011735662425338411],[61,67,0.011911354662871597],[25,38,0.01205134718830514],[42,65,0.012307293534536773],[60,66,0.01637163626564471],[30,71,0.021999052320970488],[43,72,0.02326925337294676],[56,74,0.023944691519022447],[21,31,0.03014301314017881],[46,69,0.03353220769730423],[64,75,0.047376940731579505],[26,73,0.048193858300356204],[55,78,0.04901877656583177],[27,37,0.05690461938631247],[32,79,0.06090513169900377],[15,36,0.07162789637251077],[33,68,0.07311471847570915],[22,76,0.07722833976443765],[3,13,0.07960788646317374],[28,39,0.09323440298421959],[77,80,0.09456777423064504],[81,83,0.11588358988324518],[1,5,0.14714489884548687],[20,88,0.16006488178214978],[34,84,0.16824540005739816],[19,82,0.17175154411122553],[0,14,0.1786255041256588],[70,90,0.19857047798911764],[86,94,0.23420567829460495],[2,10,0.2395034795716333],[85,95,0.28054616535185],[6,7,0.29355103025599005],[4,89,0.31245681666437486],[87,96,0.3482960221190096],[8,9,0.37895375711860535],[11,100,0.41338802559782784],[98,99,0.4463374253749631],[93,102,0.5332252113951229],[91,92,0.5666457928116624],[103,105,0.6719011405808656],[12,106,0.7230633638661348],[101,104,0.767660053089681],[110,111,1.1650977994247333],[97,113,1.5442022116628613],[107,112,1.815604801802733],[108,114,2.4293974233645086],[109,115,4.018405615058043],[116,117,14.404316304965457]],"ordem":[1,5,6,7,0,14,4,3,13,8,9,12,11,2,10,43,54,57,44,53,46,41,58,47,48,51,59,49,50,52,55,56,42,40,45,23,17,35,28,39,15,36,20,22,30,24,29,32,21,31,34,27,37,33,16,18,19,26,25,38]}}};
  var P = DADOS.pontos, N = P.length, METODOS = DADOS.metodos;
  var NS = "http://www.w3.org/2000/svg";
  var PAL = ["#168A5B", "#B8860B", "#2F6DB5", "#7A5AA6", "#C2532D", "#3A8F9E", "#8A8A2B", "#B04A7D"];
  var CINZA = "#9A9A9A", RAMO = "#777777";

  var svgD = document.getElementById("hc-dendro"), svgS = document.getElementById("hc-scatter");
  var elCorte = document.getElementById("hc-corte"), outCorte = document.getElementById("hc-out-corte");
  var resumo = raiz.querySelector(".mapa-resumo"), dica = raiz.querySelector(".mapa-dica");
  var info = raiz.querySelector(".mapa-info"), legenda = raiz.querySelector(".legenda");
  var botoes = raiz.querySelectorAll("[data-metodo]"), presets = raiz.querySelectorAll("[data-k]");
  var INFO_PADRAO = "Passe o mouse (ou toque) em um ponto do gráfico para ver o cliente.";

  function el(nome, attrs, pai) {
    var e = document.createElementNS(NS, nome);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (pai) pai.appendChild(e);
    return e;
  }
  function virgula(v, casas) { return v.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas }); }
  function passo(x) {
    var p = Math.pow(10, Math.floor(Math.log(x) / Math.LN10)), f = x / p;
    return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * p;
  }

  // ---------- estado ----------
  var metodo = "ward", k = 3, t = 0, folhaMarcada = -1;
  var DX0 = 54, DY0 = 14, DW = 736, DH = 290;       // área do dendrograma
  var SX0 = 96, SY0 = 12, SW = 692, SH = 330;       // área do gráfico de pontos
  var ramos = [], xFolha = [], posFolha = [], hmax = 1, linhaCorte, marca, grupoDoPonto = [], pts = [];

  // ---------- cálculo do corte ----------
  function cortar(m, altura) {
    var Z = METODOS[m].z, pai = new Int32Array(2 * N).fill(-1), feitos = 0, i;
    for (i = 0; i < Z.length; i++) {
      if (Z[i][2] > altura) break;
      pai[Z[i][0]] = N + i; pai[Z[i][1]] = N + i; feitos++;
    }
    function raizDe(n) { while (pai[n] >= 0) n = pai[n]; return n; }
    var tam = {}, raizes = [];
    for (i = 0; i < N; i++) { var r = raizDe(i); if (!(r in tam)) { tam[r] = 0; raizes.push(r); } tam[r]++; }
    raizes.sort(function (a, b) { return tam[b] - tam[a] || a - b; });
    var rank = {}; raizes.forEach(function (r, j) { rank[r] = j; });
    return { k: N - feitos, raizDe: raizDe, tam: tam, rank: rank, raizes: raizes };
  }
  function alturaParaK(m, kk) {
    var Z = METODOS[m].z;
    if (kk <= 1) return Z[N - 2][2] * 1.02;
    return (Z[N - kk - 1][2] + Z[N - kk][2]) / 2;
  }
  function cor(rank) { return rank < PAL.length ? PAL[rank] : CINZA; }

  // ---------- desenho do dendrograma ----------
  function montarDendro() {
    var Z = METODOS[metodo].z, ordem = METODOS[metodo].ordem, i;
    svgD.innerHTML = ""; ramos = [];
    hmax = Z[N - 2][2] * 1.08;
    function py(h) { return DY0 + DH - (h / hmax) * DH; }
    posFolha = new Array(N);
    ordem.forEach(function (folha, pos) { posFolha[folha] = pos; });
    xFolha = [];
    for (i = 0; i < N; i++) xFolha[i] = DX0 + (posFolha[i] + 0.5) * (DW / N);

    var st = passo(hmax / 5);
    for (var v = 0; v <= hmax; v += st) {
      el("line", { "class": "grid", x1: DX0, x2: DX0 + DW, y1: py(v), y2: py(v) }, svgD);
      var tx = el("text", { "class": "axis-label", x: DX0 - 8, y: py(v) + 4, "text-anchor": "end" }, svgD);
      tx.textContent = virgula(v, st < 1 ? 1 : 0);
    }
    var lab = el("text", { "class": "axis-label", x: DX0 + 6, y: DY0 + 12 }, svgD); lab.textContent = "distância";
    var lab2 = el("text", { "class": "axis-label", x: DX0 + DW, y: DY0 + DH + 28, "text-anchor": "end" }, svgD);
    lab2.textContent = "cada ponto embaixo é um cliente";

    var xs = xFolha.slice(), hs = new Array(2 * N).fill(0);
    for (i = 0; i < Z.length; i++) {
      var a = Z[i][0], b = Z[i][1], h = Z[i][2];
      xs[N + i] = (xs[a] + xs[b]) / 2; hs[N + i] = h;
      var d = "M" + xs[a].toFixed(1) + " " + py(hs[a]).toFixed(1) + "V" + py(h).toFixed(1) +
              "H" + xs[b].toFixed(1) + "V" + py(hs[b]).toFixed(1);
      ramos.push(el("path", { d: d, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", stroke: RAMO, "stroke-width": 1.6 }, svgD));
    }
    linhaCorte = el("line", { x1: DX0, x2: DX0 + DW, "stroke": "#C43D3D", "stroke-width": 1.6, "stroke-dasharray": "6 5" }, svgD);
    marca = el("circle", { r: 6, fill: "none", stroke: "#111", "stroke-width": 2, visibility: "hidden" }, svgD);
    svgD.__py = py;
  }

  function montarPontos() {
    svgS.innerHTML = ""; pts = [];
    function px(x) { return SX0 + (x / 19) * SW; }
    function py(y) { return SY0 + SH - (y / 10500) * SH; }
    var i, v;
    for (v = 0; v <= 10000; v += 2000) {
      el("line", { "class": "grid", x1: SX0, x2: SX0 + SW, y1: py(v), y2: py(v) }, svgS);
      var ty = el("text", { "class": "axis-label", x: SX0 - 8, y: py(v) + 4, "text-anchor": "end" }, svgS); ty.textContent = virgula(v, 0);
    }
    for (v = 0; v <= 15; v += 5) {
      el("line", { "class": "grid", x1: px(v), x2: px(v), y1: SY0, y2: SY0 + SH }, svgS);
      var tx = el("text", { "class": "axis-label", x: px(v), y: SY0 + SH + 20, "text-anchor": "middle" }, svgS); tx.textContent = v;
    }
    var l1 = el("text", { "class": "axis-label", x: SX0 + SW, y: SY0 + SH + 50, "text-anchor": "end" }, svgS); l1.textContent = "frequência (nº de compras)";
    var l2 = el("text", { "class": "axis-label", x: SX0 + 6, y: SY0 + 12 }, svgS); l2.textContent = "gasto total (R$)";
    for (i = 0; i < N; i++) {
      var c = el("circle", { "class": "pt", cx: px(P[i][1]).toFixed(1), cy: py(P[i][2]).toFixed(1), r: 5.5, "data-i": i, stroke: "#fff", "stroke-width": 1 }, svgS);
      c.addEventListener("pointerenter", function (e) { mostrar(parseInt(e.target.getAttribute("data-i"), 10)); });
      c.addEventListener("pointerdown", function (e) { mostrar(parseInt(e.target.getAttribute("data-i"), 10)); });
      pts.push(c);
    }
  }

  // ---------- atualização ----------
  function atualizar() {
    var Z = METODOS[metodo].z, r = cortar(metodo, t), i;
    k = r.k;
    outCorte.textContent = virgula(t, 2);
    elCorte.setAttribute("aria-valuetext", "altura " + virgula(t, 2) + ", " + k + (k === 1 ? " grupo" : " grupos"));

    for (i = 0; i < Z.length; i++) {
      var abaixo = Z[i][2] <= t;
      ramos[i].setAttribute("stroke", abaixo ? cor(r.rank[r.raizDe(N + i)]) : RAMO);
      ramos[i].setAttribute("stroke-width", abaixo ? 2.2 : 1.6);
    }
    var yc = svgD.__py(t);
    linhaCorte.setAttribute("y1", yc); linhaCorte.setAttribute("y2", yc);

    for (i = 0; i < N; i++) {
      grupoDoPonto[i] = r.rank[r.raizDe(i)];
      pts[i].setAttribute("fill", cor(grupoDoPonto[i]));
    }
    var tamanhos = r.raizes.map(function (x) { return r.tam[x]; });
    resumo.textContent = k + (k === 1 ? " grupo" : " grupos") + (k <= 8 ? ": " + tamanhos.join(" · ") + " clientes" : " · os 8 maiores têm cor");

    var maior = tamanhos[0] / N, d;
    if (k === 1) d = "Corte acima da última junção: todos os clientes ficam no mesmo grupo.";
    else if (k >= 10) d = "Corte baixo: muitos grupos pequenos (os menores aparecem em cinza).";
    else if (metodo === "single" && k >= 3 && maior >= 0.7) d = "O single junta em cadeia: um grupo grande vai engolindo os vizinhos e sobram grupos de 1 ou 2 clientes.";
    else if (metodo === "ward" && k === 3) d = "O Ward tende a formar grupos de tamanho parecido. Compare com os outros linkages.";
    else if (k === 2) d = "Corte alto: poucos grupos grandes. Os clientes de gasto alto se separam de todo o resto.";
    else d = "Troque o linkage e veja como o mesmo número de grupos pode ter tamanhos bem diferentes.";
    dica.textContent = d;

    legenda.innerHTML = "";
    r.raizes.slice(0, 8).forEach(function (x, j) {
      var li = document.createElement("li"), s = document.createElement("span");
      s.className = "sw"; s.style.background = cor(j);
      li.appendChild(s); li.appendChild(document.createTextNode("Grupo " + (j + 1) + ": " + r.tam[x])); legenda.appendChild(li);
    });
    mostrar(folhaMarcada);
  }

  function mostrar(i) {
    folhaMarcada = i;
    if (i < 0) { info.textContent = INFO_PADRAO; marca.setAttribute("visibility", "hidden"); return; }
    var g = grupoDoPonto[i], total = 0;
    for (var j = 0; j < N; j++) if (grupoDoPonto[j] === g) total++;
    info.textContent = "Cliente " + P[i][0] + " · " + P[i][1] + " compras · R$ " + virgula(P[i][2], 2) +
      " · Grupo " + (g + 1) + " (" + total + (total === 1 ? " cliente)" : " clientes)");
    marca.setAttribute("cx", xFolha[i]); marca.setAttribute("cy", svgD.__py(0)); marca.setAttribute("visibility", "visible");
  }

  function configurarSlider() {
    var Z = METODOS[metodo].z;
    var min = Z[N - 13][2], max = Z[N - 2][2] * 1.05;
    elCorte.min = min + 1e-9; elCorte.max = max; elCorte.step = "any";
  }
  function irParaK(kk) { t = alturaParaK(metodo, kk); elCorte.value = t; atualizar(); }

  botoes.forEach(function (b) {
    b.addEventListener("click", function () {
      metodo = b.getAttribute("data-metodo");
      botoes.forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
      montarDendro(); configurarSlider(); folhaMarcada = -1; irParaK(k);
    });
  });
  presets.forEach(function (b) { b.addEventListener("click", function () { folhaMarcada = -1; irParaK(parseInt(b.getAttribute("data-k"), 10)); }); });
  elCorte.addEventListener("input", function () { t = parseFloat(elCorte.value); atualizar(); });
  svgS.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") mostrar(-1); });

  montarDendro(); montarPontos(); configurarSlider();
  raiz.hidden = false;
  irParaK(3);
  window.__hc = { cortar: cortar, alturaParaK: alturaParaK, N: N };
})();
