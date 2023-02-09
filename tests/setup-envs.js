const fs = require("fs");

fs.readFileSync("./.env.example")
  .toString()
  .split("\n")
  .forEach((row) => {
    const [key, value] = row.split("=");

    // eslint-disable-next-line quotes
    process.env[key] = value.split('"')[1];
  });
