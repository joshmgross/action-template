import * as core from "@actions/core";

import * as utils from "./utils";

async function run(): Promise<void> {
  try {
    // Inputs and validation
    const myInput = core.getInput("my-input");

    utils.logInfo(`The specified input is ${myInput}`);

    utils.logInfo("🎉🎈🎊 Action complete 🎉🎈🎊");
  } catch (error) {
    core.setFailed(`❌ Action failed with error: ${error}`);
  }
}

run();
