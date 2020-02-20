import { Component, OnInit } from '@angular/core';
import { Day } from './day';
import { DayServiceService } from './day-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'calendar';
	today = Date.now();
	displayDays = false;
	whatToDoToday: string = 'ta det lugnt';
	days: Day[];

	displayDaysOn(): void {
		this.displayDays = true;
	}
	displayDaysOff(): void {
		this.displayDays = false;
	}
	handleChoose(text: string): void {
		this.whatToDoToday = text;
	}

	// skapa en class property "dayService"
	constructor(public dayService: DayServiceService) {}

	ngOnInit(): void {
		this.days = this.dayService.getDays();
	}
}









//
