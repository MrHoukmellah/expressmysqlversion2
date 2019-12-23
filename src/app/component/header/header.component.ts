import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  phrase_search : any
  clicks : boolean
  constructor(public Router: Router) {
    this.clicks = false
   }

  ngOnInit() {}
  Showsearchbar() {
		if (this.clicks) {
		this.clicks = false;
			console.log(this.clicks)
		}
		else { this.clicks = true; }
		console.log(this.clicks)

		return this.clicks
  }
  onsearch(event){
     this.phrase_search = event.target.value
     let navigationExtras: NavigationExtras = {
			state: {
			  phrase: this.phrase_search
			}
    };
    this.Router.navigate(['about'], navigationExtras)
  }
  
	
}
