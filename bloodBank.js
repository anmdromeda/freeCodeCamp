/*

Given an array of the inventory at a blood bank and an array of patient blood type requests,
return a string in the format "X of Y patients served".Where X is the maximum number of
 patients that can receive blood from the bank's inventory, and Y is the total number of patients.

Each entry in both arrays is one of the following blood types: "AB", "A", "B", or "O".

Compatibility rules:

"AB" can receive from any blood type.
"A" can receive from "A" and "O".
"B" can receive from "B" and "O".
"O" can only receive from "O".
Duplicate entries in the given arrays represent quantity.

*/

const BloodType = {
  A: "A",
  AB: "AB",
  B: "B",
  O: "O",
};

const BloodCompatibility = {
  [BloodType.A]: [BloodType.A, BloodType.O],
  [BloodType.AB]: [BloodType.AB, BloodType.A, BloodType.B, BloodType.O],
  [BloodType.B]: [BloodType.B, BloodType.O],
  [BloodType.O]: [BloodType.O],
};

function buildServedStr(servedPatients, totalPatients) {
  return `${servedPatients} of ${totalPatients} patients served`;
}

function triageBlood(bank, patients) {
  if (!Array.isArray(bank) || !Array.isArray(patients)) {
    return "";
  }

  const totalPatients = patients.length;

  if (bank.length === 0 || totalPatients.length === 0) {
    return buildServedStr(0, totalPatients);
  }

  const bankQuantity = {};

  for (const type of bank) {
    if (!Object.hasOwn(BloodType, type)) {
      throw new Error("Invalid bank blood type");
    }

    bankQuantity[type] = bankQuantity[type] ? bankQuantity[type] + 1 : 1;
  }

  let servedPatients = 0;

  for (const patientBloodType of patients) {
    if (!Object.hasOwn(BloodType, patientBloodType)) {
      throw new Error("Invalid patient blood type");
    }

    let isServed = false;

    for (const type of BloodCompatibility[patientBloodType]) {
      if (bankQuantity[type] > 0) {
        bankQuantity[type] -= 1;
        isServed = true;
        break;
      }
    }

    if (isServed) servedPatients += 1;
  }

  return buildServedStr(servedPatients, totalPatients);
}
