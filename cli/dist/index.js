#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const add_1 = require("./commands/add");
const init_1 = require("./commands/init");
commander_1.program
    .command("add <component>")
    .description("Add a UI component to your project")
    .action((component) => {
    (0, add_1.addComponent)(component);
});
commander_1.program
    .command("init <framework>")
    .description("Initialize a setup")
    .action((framework) => {
    (0, init_1.initSetup)(framework);
});
commander_1.program.parse(process.argv);
