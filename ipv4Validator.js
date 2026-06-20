/*

Given a string, determine if it is a valid IPv4 Address. 
A valid IPv4 address consists of four integer numbers separated by dots (.). 
Each number must satisfy the following conditions:

- It is between 0 and 255 inclusive.
- It does not have leading zeros (e.g. 0 is allowed, 01 is not).
-Only numeric characters are allowed.

*/

function isValidPart(part) {
  const cleanPart = part.trim();

  if (cleanPart.length < 1 || cleanPart.length > 3) {
    return false;
  }

  if (cleanPart.length > 1 && cleanPart[0] === "0") {
    return false;
  }

  const numValue = Number(cleanPart);

  if (Number.isNaN(numValue) || numValue < 0 || numValue > 255) {
    return false;
  }

  return true;
}

function isValidIPv4(ipv4) {
  if (typeof ipv4 !== "string" || ipv4.length < 7 || ipv4.length > 15) {
    return false;
  }

  const parts = ipv4.split(".");

  if (parts.length !== 4) {
    return false;
  }

  return parts.every(isValidPart);
}
