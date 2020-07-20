import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class CarComponent implements OnInit {

	loading: boolean;
	url: string = "http://challenge.agenciaego.tech"
	myCar: any = {};
	responsiveOptions: any[];

	constructor(
		private moviesService: CarsService,
		private router: ActivatedRoute
	) {
		this.loading = true;
		this.router.params.subscribe(params => {
			console.log(params);
			this.getMovie(params.id);
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

	getMovie(id: string) {
		this.moviesService.getCar(id)
			.subscribe(movie => {
				this.myCar = movie;
				console.log(this.myCar);
				this.loading = false;
			});
	}

	ngOnInit() {
	}

}
