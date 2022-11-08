const Web3 = require('web3');
const namehash = require("eth-ens-namehash");

async function resolve(name, obbResolver, rpc) {
  const web3 = new Web3(rpc);
  if (name.endsWith(".obb")) {
    const myContract = new web3.eth.Contract(
      [{
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "addr",
        "outputs": [
          {
            "internalType": "address payable",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }],
      obbResolver
    );
    const addr = await myContract.methods.addr(namehash.hash(name)).call();
    return addr;
  } else if (name.endsWith(".eth")) {
    const addr = await web3.eth.ens.getAddress(name);
    return addr;
  } else {
    return "name unrecognized";
  }
}

module.exports.resolve = resolve;
