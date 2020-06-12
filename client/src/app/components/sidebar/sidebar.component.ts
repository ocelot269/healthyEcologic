import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {

  @Output() sidebarSelected = new EventEmitter<any>();
    productsList: any = [
    { name_product: "zanahoria", type: "hortaliza" },
    { name_product: "patata", type: "hortaliza" },
    { name_product: "tomate", type: "hortaliza" },
    { name_product: "pimiento", type: "hortaliza" },
    { name_product: "brocoli", type: "hortaliza" },
    { name_product: "platano", type: "fruta" },
    { name_product: "naranja", type: "fruta" },
    { name_product: "limon", type: "fruta" },
    { name_product: "fresa", type: "fruta" },
  ];
  constructor() {}

  ngOnInit(): void {}

  productSelected(event){
    this.sidebarSelected.emit(event);
  }
}
