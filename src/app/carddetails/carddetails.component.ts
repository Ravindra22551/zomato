import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent {
  card:any;
constructor(private route:ActivatedRoute,private service:CardsService){}
ngOnInit():void{
  const id=Number(this.route.snapshot.paramMap.get('id'))
  this.service.getdetails().subscribe(data=>{
this.card=data.find(c=>c.id ===id);
  })
}
}
