function isValidObjectType(value) {
  return typeof value === "object" && value !== null;
}

function isValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

function isValidBool(value) {
  return typeof value === "boolean";
}

function isValidString(value) {
  return typeof value === "string";
}

function isValidArray(value) {
  return Array.isArray(value);
}

function isValidUsersBody(value) {
  if (!isValidObjectType(value)) {
    return false;
  }

  return Object.hasOwn(value, "users") && isValidArray(value.users);
}

const USER_PROFILE_SCHEMA_VALIDATOR = {
  username(value) {
    return isValidString(value) && value.length > 0;
  },

  posts: isValidNumber,

  verified: isValidBool,

  role(value) {
    if (!isValidString(value)) {
      return false;
    }

    const ROLES = ["user", "creator", "moderator", "staff", "admin"];

    return ROLES.includes(value);
  },

  supporter(value) {
    if (typeof value !== "undefined") {
      return isValidBool(value);
    }

    return true;
  },

  followers(value) {
    if (typeof value !== "undefined") {
      return isValidNumber(value);
    }

    return true;
  },

  badges(value) {
    return isValidArray(value) && value.every((str) => typeof str === "string");
  },
};

const USER_PROFILE_KEYS = Object.keys(USER_PROFILE_SCHEMA_VALIDATOR);

function isValidUserProfileSchema(schema = {}) {
  const schemaKeys = Object.keys(schema);

  if (!isValidObjectType(schema) || schemaKeys.length === 0) {
    return false;
  }

  for (const key of USER_PROFILE_KEYS) {
    const validator = USER_PROFILE_SCHEMA_VALIDATOR[key];
    const isValidProperty = validator(schema[key]);

    if (!isValidProperty) {
      return false;
    }
  }

  return true;
}

function isValidSchema(obj = {}) {
  if (!isValidUsersBody(obj)) {
    return false;
  }

  const invalidSchemas = [];

  for (const user of obj.users) {
    if (!isValidUserProfileSchema(user)) {
      invalidSchemas.push(user);
    }
  }

  return invalidSchemas.length === 0;
}
