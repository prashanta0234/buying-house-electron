const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1420, height: 800 });

  // and load the index.html of the app.
  // const startUrl = url.format({
  //   pathname: path.join(__dirname, "/../build/index.html"),
  //   protocol: "file:",
  //   slashes: true,
  // });
  // mainWindow.loadURL(startUrl);
  mainWindow.loadURL("http://localhost:3000/");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
