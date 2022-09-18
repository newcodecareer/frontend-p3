const isDevelopment = process.env.TYPE === "development";

const presets = [
  ["@babel/preset-env", { useBuiltIns: "usage", corejs: { version: 3 } }],
  [
    "@babel/preset-react",
    {
      development: isDevelopment,
      useBuiltIns: true,
    },
  ],
];

const env = {};

module.exports = {
  presets,
  env,
};
