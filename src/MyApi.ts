import { contextBridge, ipcRenderer } from "electron";

export class MyApi
{
	expose()
	{
		contextBridge.exposeInMainWorld( "myApi",
			{
				setTitle: ( newTitle: string ) => this.setTitle( newTitle ),
				ping: async ( data: string ) => this.ping( data )
			} );
	}

	setTitle( newTitle: string )
	{
		console.log( "MyApi: sending 'setTitle' event to ipcRenderer with title: " + newTitle );
		ipcRenderer.send( "setTitle", newTitle );
	}

	async ping( data: string ): Promise<string>
	{
		console.log( "MyApi: Invoking 'ping' event on ipcRenderer with data: " + data );
		const result = <string> await ipcRenderer.invoke( 'ping', data );

		console.log( "MyApi: Received result with data: " + result );
		return result;
	}
}

declare global
{
	interface Window
	{
		myApi: any;
	}
}
