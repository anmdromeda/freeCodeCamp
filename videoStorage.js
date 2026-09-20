/*

Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, 
return the number of videos the hard drive can store using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.

Use the following conversions:

Unit	Equivalent
1 B	  1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB

For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.

*/

const Units = {
  Byte: "B",
  KiloByte: "KB",
  MegaByte: "MB",
  GigaByte: "GB",
  TeraByte: "TB",
};

const UnitEquivalencesExponentIndexes = [Units.TeraByte, Units.GigaByte, Units.MegaByte, Units.KiloByte, Units.Byte];

const ERROR_MESSAGES = {
  INVALID_VIDEO_UNIT: "Invalid video unit",
  INVALID_DRIVE_UNIT: "Invalid drive unit",
};

function isValidVideoSizeUnit(value) {
  const videoUnits = Object.values(Units).filter((unit) => unit !== "TB");
  return videoUnits.includes(value);
}

function isValidHardDriveUnit(value) {
  return [Units.GigaByte, Units.TeraByte].includes(value);
}

function toEquivalent({ value, fromUnit, toUnit }) {
  const fromUnitIndex = UnitEquivalencesExponentIndexes.indexOf(fromUnit);
  const toUnitIndex = UnitEquivalencesExponentIndexes.indexOf(toUnit);
  const unitInTargetUnit = 1000 ** Math.abs(toUnitIndex - fromUnitIndex);

  return value * unitInTargetUnit;
}

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  if (!isValidVideoSizeUnit(videoUnit)) return ERROR_MESSAGES.INVALID_VIDEO_UNIT;
  if (!isValidHardDriveUnit(driveUnit)) return ERROR_MESSAGES.INVALID_DRIVE_UNIT;

  const driveSizeInVideoUnit = toEquivalent({ value: driveSize, fromUnit: driveUnit, toUnit: videoUnit });
  const videosCount = Math.floor(driveSizeInVideoUnit / videoSize);

  return videosCount;
}

console.log(numberOfVideos(500, "MB", 100, "GB"));
