/**
 * Created by UCHATNU on 8/3/2016.
 */

const electron = require('electron');
const {app,BrowserWindow}  = electron;

app.on('ready',()=>{
    let win = new BrowserWindow({
        width:800,
        height:600
    });
    win.loadURL(`file://${__dirname}/index.html`);//file://${__dirname}/index.html
});
