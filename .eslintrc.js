module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    ValidationError: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": [
      "error",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_" },
    ],
    "import/prefer-default-export": "off",
  },
};
