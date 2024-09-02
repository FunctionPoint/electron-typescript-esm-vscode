import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

export class MyApp
{
	browserWindow!: BrowserWindow;

	start()
	{
		app.whenReady().then( () => this.start2() );
	}

	start2()
	{
		this.createWindow();
		this.setupIpc();
		this.loadHtml();
		this.openDevTools();
	}

	createWindow()
	{
		this.browserWindow = new BrowserWindow( {
			width: 1000,
			height: 800,
			webPreferences: {
				nodeIntegration: true,
				nodeIntegrationInWorker: true,
				nodeIntegrationInSubFrames: true,
				contextIsolation: true,
				sandbox: false,
				preload: path.resolve( "preload.mjs" )
			}
		} );
	}

	setupIpc()
	{
		ipcMain.on( "setTitle", ( event, title ) => this.onSetTitle( title ) );
		ipcMain.handle( "ping", ( event, data ) => this.onPing( data ) );
	}

	loadHtml()
	{
		this.browserWindow.loadFile( "index.html" )
			.then( () => console.log( "MyApp: HTML file loaded in browser window" ) )
			.catch( ( error: any ) => console.error( error ) );
	}

	openDevTools()
	{
		// 2024-09-01:
		// This request currently produces this error on the rendering console: "Request Autofill.enable failed."
		// This is an Electron issue that is reported here: https://github.com/electron/electron/issues/41614
		this.browserWindow.webContents.openDevTools();
	}

	onSetTitle( title: string )
	{
		console.log( "MyApp: New title: " + title );
		this.browserWindow.setTitle( title );
	}

	onPing( data: string ): string
	{
		console.log( "MyApp: Received ping with data: " + data );

		let result = "pong";
		console.log( "MyApp: Replying with result data: " + result );
		return result;
	}
}
