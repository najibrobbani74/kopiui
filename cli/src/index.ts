#!/usr/bin/env node

import { program } from "commander";
import { addComponent } from "./commands/add";

program
  .command("add <component>")
  .description("Add a UI component to your project")
  .action((component) => {
    addComponent(component);
  });

program.parse(process.argv);
program
  .command("init")
  .description("Initialize a setup")
  .action(() => {
    console.log("Initializing setup...");
    // Add initialization logic here
  });