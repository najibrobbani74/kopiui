#!/usr/bin/env node

import { program } from "commander";
import { addComponent } from "./commands/add";
import { initSetup } from "./commands/init";

program
  .command("add <component>")
  .description("Add a UI component to your project")
  .action((component) => {
    addComponent(component);
  });

program
  .command("init <framework>")
  .description("Initialize a setup")
  .action((framework) => {
    initSetup(framework);
  });

program.parse(process.argv);