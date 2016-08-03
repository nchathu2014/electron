/**
 * Created by UCHATNU on 8/3/2016.
 */

const {app, BrowserWindow} = require('electron');
let win;
app.on('ready', function () {
    win = new BrowserWindow({
        width: 800,
        height: 400
    });

    win.loadURL(`file://${__dirname}/index.html`)
});