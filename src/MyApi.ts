import { contextBridge, ipcRenderer } from "electron";

type PingCallback = ( data: string ) => any;

export class MyApi
{
	expose()
	{
		let api =
			{
				setTitle: ( newTitle: string ) => this.setTitle( newTitle ),
				ping: ( data: string, pingCallback: PingCallback ) => this.ping( data, pingCallback )
			};

		contextBridge.exposeInMainWorld( "myApi", api );
	}

	setTitle( newTitle: string )
	{
		console.log( "MyApi: sending 'setTitle' event to ipcRenderer with title: " + newTitle );
		ipcRenderer.send( "setTitle", newTitle );
	}

	ping( data: string, pingCallback: PingCallback )
	{
		console.log( "MyApi: Invoking 'ping' event on ipcRenderer with data: " + data );
		ipcRenderer.invoke( 'ping', data )
			.then( ( result: string ) => pingCallback( result ) );
	}
}

declare global
{
	interface Window
	{
		myApi: any;
	}
}
