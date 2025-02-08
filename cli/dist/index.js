#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const add_1 = require("./commands/add");
commander_1.program
    .command("add <component>")
    .description("Add a UI component to your project")
    .action((component) => {
    (0, add_1.addComponent)(component);
});
commander_1.program.parse(process.argv);
commander_1.program
    .command("init")
    .description("Initialize a setup")
    .action(() => {
    console.log("Initializing setup...");
    // Add initialization logic here
});
