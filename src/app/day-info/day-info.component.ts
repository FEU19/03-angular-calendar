import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-day-info',
	templateUrl: './day-info.component.html',
	styleUrls: ['./day-info.component.css']
})
export class DayInfoComponent implements OnInit {
	@Input() day: string = '2020-02-20';
	@Input() content: string = 'Lunch';

	constructor() { }

	ngOnInit(): void {
		console.log('DayInfoComponent created');
	}

}






//
