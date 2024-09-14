export class MyView
{
	changeBackgroundButton?: HTMLButtonElement;
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
		this.changeBackgroundButton = <HTMLButtonElement> document.getElementById( "changeBackgroundButton" );
		console.assert( this.changeBackgroundButton );
		this.changeBackgroundButton.addEventListener( "click", () => this.changeBackgroundColor() );

		this.modifyTitleButton = <HTMLButtonElement> document.getElementById( 'modifyTitleButton' );
		console.assert( this.modifyTitleButton );
		this.modifyTitleButton.addEventListener( "click", () => this.modifyTitle() );

		this.pingButton = <HTMLButtonElement> document.getElementById( 'pingButton' );
		console.assert( this.pingButton );
		this.pingButton.addEventListener( "click", () => this.ping() );

		this.pingResultSpan = <HTMLSpanElement> document.getElementById( 'pingResultSpan' );
		console.assert( this.pingResultSpan );
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

