import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentItem = 'Televisão';

  items = ['Melão','Carne','Bacon'];

  addItem(newItem:string){
    this.items.push(newItem);
  }

  removeItem(item:any){
    this.items.splice(item);
  }


}
