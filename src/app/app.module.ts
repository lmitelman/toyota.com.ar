import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';

import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { CarsService } from './services/cars.service';
import { TextContentTruncatePipe } from './pipes/truncate.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CarComponent,
		TextContentTruncatePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientJsonpModule,
		HttpClientModule,
		ButtonModule,
		CarouselModule
	],
	providers: [CarsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
