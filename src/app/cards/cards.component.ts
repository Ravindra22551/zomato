import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Cards } from '../models/cards';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  records:Cards[]=[];
constructor (private http:CardsService,private router:Router){}
ngOnInit():void{
  this.http.getdetails().subscribe(data=>this.records=data);

}
getdetails(id:number | undefined){
  this.router.navigate(['/card',id])

}
}
