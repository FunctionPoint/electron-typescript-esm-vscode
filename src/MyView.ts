export class MyView
{
	changeBackgroundButton!: HTMLButtonElement;
	modifyTitleButton!: HTMLButtonElement;
	pingButton!: HTMLButtonElement;
	pingResultSpan!: HTMLSpanElement;

	start()
	{
		console.log( "MyView: Start" );
		this.bindElements();
	}

	bindElements()
	{
		this.changeBackgroundButton = this.getElement( "changeBackgroundButton" ) as HTMLButtonElement;
		this.changeBackgroundButton.addEventListener( "click", () => this.changeBackgroundColor() );

		this.modifyTitleButton = this.getElement( "modifyTitleButton" ) as HTMLButtonElement;
		this.modifyTitleButton.addEventListener( "click", () => this.modifyTitle() );

		this.pingButton = this.getElement( "pingButton" ) as HTMLButtonElement;
		this.pingButton.addEventListener( "click", () => this.ping() );

		this.pingResultSpan = this.getElement( "pingResultSpan" ) as HTMLSpanElement;
	}

	getElement( name: string ): HTMLElement
	{
		let element = document.getElementById( name )
		if( ! element )
			throw Error( "HTML element not found: " + element );
		return element;
	}

	changeBackgroundColor()
	{
		console.log( "MyView: Change background button clicked." );
		document.body.style.setProperty( "background", "green" );
	}

	modifyTitle()
	{
		console.log( "MyView: Button modify title clicked." );
		window.myApi.setTitle( "Hello Electron! (modified title)" );
	}

	ping()
	{
		console.log( "MyView: Ping button clicked." );
		window.myApi.ping( "Ping", ( result: string ) => this.onPing( result ) )
	}

	onPing( result: string )
	{
		console.log( "MyView: Received result from API: " + result );
		this.pingResultSpan.textContent = result;
	}

}
