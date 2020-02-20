import { Injectable } from '@angular/core';
import { Day } from './day';

@Injectable({
	providedIn: 'root'
})
export class DayServiceService {
	getDays(): Day[] {
		return this.days;
	}

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

	constructor() { }
}
