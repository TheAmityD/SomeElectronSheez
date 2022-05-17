import Electron, { app, BrowserWindow } from 'electron'

let win = null

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
        autoHideMenuBar: true,
        icon: "troll.png",
    })

    win.loadFile("index.html")
}

app.whenReady().then(createWindow)