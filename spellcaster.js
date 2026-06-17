/*

Given a string of spell codes you are casting, calculate the total score.

Each character in the string represents a spell:

Code	Spell	Category	Base Score
"f"	Fire	Destruction	3
"l"	Lightning	Destruction	3
"i"	Ice	Control	2
"w"	Wind	Control	2
"h"	Heal	Restoration	1
"s"	Shield	Restoration	1
A combo multiplier is applied based on how many spells in a row have been cast from different categories:

The first spell always scores at base value.
Each consecutive spell from a different category than the previous increases the multiplier by 1.
Casting a spell from the same category as the previous resets the multiplier back to 1.
The score for each spell is its base score multiplied by the current multiplier.
Return the total score from the sequence of spells.

*/

const SpellCodes = {
  Fire: "f",
  Lightning: "l",
  Ice: "i",
  Wind: "w",
  Heal: "h",
  Shield: "s",
};

const SpellCategoriesName = {
  Destruction: "Destruction",
  Control: "Control",
  Restoration: "Restoration",
};

const SpellsInfo = {
  [SpellCodes.Fire]: {
    category: SpellCategoriesName.Destruction,
    baseScore: 3,
  },
  [SpellCodes.Lightning]: {
    category: SpellCategoriesName.Destruction,
    baseScore: 3,
  },
  [SpellCodes.Ice]: {
    category: SpellCategoriesName.Control,
    baseScore: 2,
  },
  [SpellCodes.Wind]: {
    category: SpellCategoriesName.Control,
    baseScore: 2,
  },
  [SpellCodes.Heal]: {
    category: SpellCategoriesName.Restoration,
    baseScore: 1,
  },
  [SpellCodes.Shield]: {
    category: SpellCategoriesName.Restoration,
    baseScore: 1,
  },
};

function cast(spells) {
  if (typeof spells !== "string" || spells.length === 0) {
    return 0;
  }

  let score = 0;
  let multiplier = 1;
  let prevCategory = null;

  for (const code of spells) {
    const spell = SpellsInfo[code];

    if (!spell) continue;

    if (prevCategory !== null) {
      multiplier = prevCategory === spell.category ? 1 : multiplier + 1;
    }

    score += spell.baseScore * multiplier;
    prevCategory = spell.category;
  }

  return score;
}
