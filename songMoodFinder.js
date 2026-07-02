/*

Given a genre string and a BPM number for a song, determine the mood using the following table:

Mood	    Genre	          BPM Range
"focus"	  "classical"	    60–109
"focus"	  "electronic"	  60–89
"happy"	  "pop"	          60–180
"happy"	  "classical"	    110–180
"happy"	  "rock"	        60–129
"happy"	  "electronic"	  90–134
"hype"	  "rock"	        130–180
"hype"	  "electronic"	  135–180

*/

const GenreName = {
  Classical: "classical",
  Electronic: "electronic",
  Pop: "pop",
  Rock: "rock",
};

const MoodName = {
  Focus: "focus",
  Happy: "happy",
  Hype: "hype",
};

const GenreMood = {
  [GenreName.Classical]: function (bpm) {
    if (bpm >= 60 && bpm <= 109) {
      return MoodName.Focus;
    }

    if (bpm >= 110 && bpm <= 180) {
      return MoodName.Happy;
    }

    return null;
  },

  [GenreName.Electronic]: function (bpm) {
    if (bpm >= 60 && bpm <= 89) {
      return MoodName.Focus;
    }

    if (bpm >= 90 && bpm <= 134) {
      return MoodName.Happy;
    }

    if (bpm >= 135 && bpm <= 180) {
      return MoodName.Hype;
    }

    return null;
  },

  [GenreName.Pop]: function (bpm) {
    if (bpm >= 60 && bpm <= 180) {
      return MoodName.Happy;
    }

    return null;
  },

  [GenreName.Rock]: function (bpm) {
    if (bpm >= 60 && bpm <= 129) {
      return MoodName.Happy;
    }

    if (bpm >= 129 && bpm <= 180) {
      return MoodName.Hype;
    }

    return null;
  },
};

function getMood(genre, bpm) {
  if (!Object.hasOwn(GenreMood, genre) || typeof bpm !== "number" || bpm < 0 || bpm > 180) {
    return null;
  }

  const moodCalculator = GenreMood[genre];

  return moodCalculator(bpm);
}
