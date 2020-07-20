import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-movie',
	templateUrl: './car.component.html',
	styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

	loading: boolean;
	url: string = "https://challenge.agenciaego.tech"
	myCar: any = {};
	responsiveOptions: any[];

	constructor(
		private carsService: CarsService,
		private router: ActivatedRoute
	) {
		this.loading = true;
		this.router.params.subscribe(params => {
			console.log(params);
			this.getCar(params.id);
		});
		this.responsiveOptions = [
			{
				breakpoint: '1024px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '768px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '560px',
				numVisible: 1,
				numScroll: 1
			}
		];
	}

	getCar(id: string) {
		this.carsService.getCar(id)
			.subscribe(movie => {
				this.myCar = movie;
				console.log(this.myCar);
				this.loading = false;
			});
	}

	ngOnInit() {
	}

}
