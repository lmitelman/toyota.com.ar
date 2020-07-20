import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Toyota';

	/* Set the width of the side navigation to 250px */
	openNav() {
		document.getElementById("mySidenav").style.width = "320px";
	}

	/* Set the width of the side navigation to 0 */
	closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
}
