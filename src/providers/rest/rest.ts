import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	
	/* Fixed url for testing */
	OUR_REST_API_URL = "https://api.edamam.com/search?q=spicy,chicken&app_id=094290e0&app_key=f6754f4874d157c5d9c45368bae02f6f&health=vegan";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getDataFromAPIViaPromise() {
		//this.http.get(this.OUR_REST_API_URL).toPromise();			// This could be shorter code for below... possibly needs catch wherever it is called. Brona
  	return new Promise(resolve => {
  		//let url = "https://api.edamam.com/search?q=";
  		this.http.get(this.OUR_REST_API_URL).subscribe(data => {resolve(data);
  			console.log("Subscribed to the Data Promise");
  	}, err => {
  		console.log(err);
  	});
  	});
  }
}
