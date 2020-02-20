import { Component, OnInit } from '@angular/core';
import { Day } from './day';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'calendar';
	today = Date.now();
	displayDays = false;
	days: Day[] = [
		{
			day: '2020-02-17',
			content: 'Pluggade Angular'
		},
		{
			day: '2020-02-18',
			content: 'Bästa lektionen EVER'
		},
		{
			day: '2020-02-19',
			content: 'Repetera'
		}
	]

	displayDaysOn(): void {
		this.displayDays = true;
	}
	displayDaysOff(): void {
		this.displayDays = false;
	}

	ngOnInit(): void {
		console.log('days is:', this.days)
	}
}









//
