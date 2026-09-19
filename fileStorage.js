/**

Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), 
return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.

Use the following conversions:

Unit	Equivalent
1 B	  1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB

For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

*/

const Units = {
  Byte: "B",
  KiloByte: "KB",
  MegaByte: "MB",
  GigaByte: "GB",
};

const UnitEquivalencesExponentIndexes = [Units.GigaByte, Units.MegaByte, Units.KiloByte, Units.Byte];

function ensureValidFileUnit(fileUnit) {
  if (typeof fileUnit !== "string") {
    throw new Error("file unit must be a string");
  }

  if (!Object.values(Units).includes(fileUnit)) {
    throw new Error("Invalid file unit");
  }
}

function ensureValidNumber(value) {
  if (typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value) || value < 0) {
    throw new Error("Invalid number");
  }
}

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  ensureValidNumber(fileSize);
  ensureValidFileUnit(fileUnit);
  ensureValidNumber(driveSizeGb);

  const unitExponent = UnitEquivalencesExponentIndexes.indexOf(fileUnit);
  const unitInEquivalentSize = 1000 ** unitExponent;
  const gbToUnitsValue = driveSizeGb * unitInEquivalentSize;

  const filesCount = gbToUnitsValue / fileSize;

  return Math.floor(filesCount);
}
