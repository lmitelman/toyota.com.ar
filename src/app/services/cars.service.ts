import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'; // Map

@Injectable()
export class CarsService {

	private url: string = "https://challenge.agenciaego.tech"

	constructor(
		private http: HttpClient
	) { }


	getToyotaCars() {
		let url = `${this.url}/models`;
		return this.http.get(url)
	}

	getCar(id: string) {
		let url = `${this.url}/models/${id}`;
		return this.http.get(url).pipe(
			map((data: any) => data));
	}

}
