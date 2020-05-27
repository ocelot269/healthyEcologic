import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
  @Input() idProvider = null;
  listComents = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.idProvider);
  }

}
