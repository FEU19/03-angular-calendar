import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-day-info',
	templateUrl: './day-info.component.html',
	styleUrls: ['./day-info.component.css']
})
export class DayInfoComponent implements OnInit {
	// @Input() talar om att våra class properties day och content förväntar sig ett värde från parent component.
	// OBS! Kom ihåg att importera Input från @angular/core!
	// @Output() skapar ett objekt (en EventEmitter) som kan generera ett event
	@Input() day: string;
	@Input() content: string;
	@Output() choose = new EventEmitter<string>();

	chooseThis(): void {
		// skicka tillbaka den valda dagen till parent
		this.choose.emit(this.content);
	}

	constructor() { }

	ngOnInit(): void {
		console.log('DayInfoComponent created');
	}

}






//
