const {resolve} = require("./index")
resolve("app.obb", "0x577390bC3e45a7611Ce0792c06F723041C915a52", "https://goerli.infura.io/v3/2c1da69931e04e06806dc7323f2e1d2d").then(res => {
  console.log(res);
});
