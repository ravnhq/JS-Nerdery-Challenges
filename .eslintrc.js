module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: [2, "space"],
    "no-tabs": 0,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
};
