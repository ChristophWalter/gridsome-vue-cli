module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ["gridsome"],
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "gridsome/format-query-block": "warn"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
