/*

Given two database objects, return the second object with any missing properties from the first filled in.

Fields that already exist in the record should not be overwritten.

*/

function migrateRecord(schema, record) {
  const newRecord = { ...record };

  for (const key in schema) {
    if (!Object.hasOwn(record, key)) {
      newRecord[key] = schema[key];
    }
  }

  return newRecord;
}

console.log(migrateRecord({ username: "", posts: 0 }, { verified: true }));
