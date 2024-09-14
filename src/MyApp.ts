import { app, BrowserWindow, ipcMain, WebPreferences, BrowserWindowConstructorOptions,
	Menu, MenuItem, LoadFileOptions } from "electron";
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
		this.setupIpc();
		this.setMenu();
		this.createWindow();
		this.loadHtml();
		this.openDevTools();
	}

	setupIpc()
	{
		ipcMain.on( "setTitle", ( event, title ) => this.onSetTitle( title ) );
		ipcMain.handle( "ping", ( event, data ) => this.onPing( data ) );
	}

	onSetTitle( title: string )
	{
		console.log( "MyApp: New title: " + title );
		this.browserWindow.setTitle( title );
	}

	onPing( data: string ): string
	{
		console.log( "MyApp: Received ping with data: " + data );

		let result = "Pong";
		console.log( "MyApp: Replying with result data: " + result );
		return result;
	}

	setMenu()
	{
		let fileMenu = new Menu();
		fileMenu.append( new MenuItem( { label: 'Exit', click: () => this.onFileExit() } ) );

		let mainMenu = new Menu();
		mainMenu.append( new MenuItem( { label: 'File', submenu: fileMenu } ) );

		Menu.setApplicationMenu( mainMenu );
	}

	onFileExit()
	{
		app.quit();
	}

	createWindow()
	{
		let webPreferences: WebPreferences = {
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			nodeIntegrationInSubFrames: true,
			contextIsolation: true,
			sandbox: false,
			preload: path.resolve( "preload.mjs" )
		}

		let options:  BrowserWindowConstructorOptions = {
			width: 1000,
			height: 800,
			webPreferences: webPreferences
		};

		this.browserWindow = new BrowserWindow( options );
	}

	loadHtml()
	{
		let options: LoadFileOptions = { search: '?test' };
		this.browserWindow.loadFile( "index.html", options )
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

}
