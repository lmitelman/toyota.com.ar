import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	loading: boolean;
	url: string = "https://challenge.agenciaego.tech"
	cars: any;
	allCars: any;

	constructor(
		private carsService: CarsService,
		private router: Router
	) {
		this.loading = true;
	}

	ngOnInit() {
		this.carsService.getToyotaCars()
			.subscribe(response => {
				console.log(response);
				this.allCars = response;
				this.cars = response;
				this.loading = false;
			})
	}

	goToCar(id: string) {
		this.router.navigate(['car', id])
	}

	search(param) {
		if (param == 'Todos') {
			this.cars = this.allCars;
		} else {
			let result: any[] = [];
			this.allCars.forEach(element => {
				if (element.segment == param) {
					result.push(element)
				}
			});
			this.cars = result;
		}
	}

	/** This function allows you to sort an object list by an object property. */
	dynamicSort(property) {
		let sortOrder = 1;
		if (property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a, b) {
			let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
		}
	}

	sortLowestPriceFirst() {
		this.cars.sort(this.dynamicSort("price"));
	}

	sortHighestPriceFirst() {
		this.cars.sort(this.dynamicSort("price"));
		this.cars.reverse();
	}

	sortNewerFirst() {
		this.cars.sort(this.dynamicSort("year"));
		this.cars.reverse();
	}

	sortOlderFirst() {
		this.cars.sort(this.dynamicSort("year"));
	}
}
