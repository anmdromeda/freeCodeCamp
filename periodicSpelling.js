/*

Given a word, determine if it can be spelled using element symbols from the periodic table.

Ignore casing when spelling a word. "neon" can be spelled with the symbols "Ne", "O", and "N".
Here's a full list of the element symbols:

*/

const periodicTable = {
  ac: "Ac",
  ag: "Ag",
  al: "Al",
  am: "Am",
  ar: "Ar",
  as: "As",
  at: "At",
  au: "Au",
  b: "B",
  ba: "Ba",
  be: "Be",
  bh: "Bh",
  bi: "Bi",
  bk: "Bk",
  br: "Br",
  c: "C",
  ca: "Ca",
  cd: "Cd",
  ce: "Ce",
  cf: "Cf",
  cl: "Cl",
  cm: "Cm",
  cn: "Cn",
  co: "Co",
  cr: "Cr",
  cs: "Cs",
  cu: "Cu",
  db: "Db",
  ds: "Ds",
  dy: "Dy",
  er: "Er",
  es: "Es",
  eu: "Eu",
  f: "F",
  fe: "Fe",
  fl: "Fl",
  fm: "Fm",
  fr: "Fr",
  ga: "Ga",
  gd: "Gd",
  ge: "Ge",
  h: "H",
  he: "He",
  hf: "Hf",
  hg: "Hg",
  ho: "Ho",
  hs: "Hs",
  i: "I",
  in: "In",
  ir: "Ir",
  k: "K",
  kr: "Kr",
  la: "La",
  li: "Li",
  lr: "Lr",
  lu: "Lu",
  lv: "Lv",
  mc: "Mc",
  md: "Md",
  mg: "Mg",
  mn: "Mn",
  mo: "Mo",
  mt: "Mt",
  n: "N",
  na: "Na",
  nb: "Nb",
  nd: "Nd",
  ne: "Ne",
  nh: "Nh",
  ni: "Ni",
  no: "No",
  np: "Np",
  o: "O",
  og: "Og",
  os: "Os",
  p: "P",
  pa: "Pa",
  pb: "Pb",
  pd: "Pd",
  pm: "Pm",
  po: "Po",
  pr: "Pr",
  pt: "Pt",
  pu: "Pu",
  ra: "Ra",
  rb: "Rb",
  re: "Re",
  rf: "Rf",
  rg: "Rg",
  rh: "Rh",
  rn: "Rn",
  ru: "Ru",
  s: "S",
  sb: "Sb",
  sc: "Sc",
  se: "Se",
  sg: "Sg",
  si: "Si",
  sm: "Sm",
  sn: "Sn",
  sr: "Sr",
  ta: "Ta",
  tb: "Tb",
  tc: "Tc",
  te: "Te",
  th: "Th",
  ti: "Ti",
  tl: "Tl",
  tm: "Tm",
  ts: "Ts",
  u: "U",
  v: "V",
  w: "W",
  xe: "Xe",
  y: "Y",
  yb: "Yb",
  zn: "Zn",
  zr: "Zr",
};

function getPeriodicSpelling(str) {
  if (typeof str !== "string" || str.trim().length === 0) {
    return [];
  }

  const word = str.trim().toLowerCase();

  // 1. Find triplets
  const triplets = [[]];

  for (let i = 0; i < word.length; i++) {
    if (triplets[triplets.length - 1].length === 3) {
      triplets.push([]);
    }

    triplets[triplets.length - 1].push(word[i]);
  }

  // 2. Find elements
  const matches = [];

  for (let j = 0; j < triplets.length; j++) {
    const triplet = triplets[j];

    let k = 0;

    while (k < triplet.length) {
      const s1 = triplet[k];
      const s2 = triplet[k + 1];

      if (periodicTable[s1 + s2]) {
        matches.push(periodicTable[s1 + s2]);
        k += 1;
      } else if (periodicTable[s1]) {
        matches.push(periodicTable[s1]);
      } else if (triplets[j + 1]) {
        triplets[j + 1][0] = s1 + triplets[j + 1][0];
      }

      k += 1;
    }
  }

  if (matches.join("").toLowerCase() === word) {
    return matches;
  }

  return [];
}
