"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let win = null;
const createWindow = () => {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
        autoHideMenuBar: true,
        icon: "troll.png",
    });
    win.loadFile("index.html");
};
electron_1.app.whenReady().then(createWindow);
