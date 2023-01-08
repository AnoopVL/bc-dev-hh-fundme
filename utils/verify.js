const { run } = require("hardhat");

const verify = async (constAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: constAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().include("already verified")) {
      console.log("Already Verified .....");
    } else {
      console.log(e);
    }
  }
};

module.exports = { verify };
