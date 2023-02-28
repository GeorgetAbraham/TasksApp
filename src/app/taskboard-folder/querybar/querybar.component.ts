import { Component } from '@angular/core';
import { ViewFilterHolderService } from 'src/app/service/view-filter-holder.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-querybar',
  templateUrl: './querybar.component.html',
  styleUrls: ['./querybar.component.css']
})
export class QuerybarComponent {

  public viewDropdown=new FormControl('column');
  constructor (private viewFilterService: ViewFilterHolderService){

  }

  public viewChange(){
    this.viewFilterService.setviewMode(this.viewDropdown.value);
    
  }

}
