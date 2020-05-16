import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsService } from '../../services/products.service';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [MessageService]
})
export class StockComponent implements OnInit {

  newProduct: FormGroup;
  products:any = [] ;
  showModal: boolean = false;
  uploadedFiles: any[] = [];
  constructor(private userService:UserService,
              private productsService:ProductsService,
              private fb: FormBuilder,
              private messageService: MessageService,
              @Inject(DOCUMENT) private document: Document
    ) { }


  ngOnInit(): void {

        this.newProduct = this.fb.group({
            'id_provider':new FormControl('3', Validators.required),
            'name_product': new FormControl('', Validators.required),
            'product_description': new FormControl('', Validators.required),
            'units': new FormControl('', Validators.required),
            'price': new FormControl('', Validators.required),
            'kilos': new FormControl('', Validators.required),
            'image': new FormControl(''),
        });

        this.getProductListById();
  }

    getProductListById(){
      this.productsService.getProductsByProviderList('3').subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
    }


  showDialog() {
      this.showModal = true;
  }

  onUpload(event) {
      this.uploadedFiles = [];
      for(let file of event.files) {
          this.getBase64(file).then(
          data => this.newProduct.value.image = data
          );
          this.uploadedFiles.push(file);
      }
  }

  getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  }

  crearProducto(producto){
    this.productsService.addProduct(producto).subscribe(
      res => {
        console.log(res);
        this.messageService.add({severity: 'success', summary: 'Producto Guardado', detail: 'El producto se ha creado correctamente'});
      },
      err => {
        console.log(err)
        this.messageService.add({severity:'warn', summary: 'Warn Message', detail:'El producto no se ha podido guardar'});
      }
    )
    this.recargarPagina();
  }

  recargarPagina(){ this.document.location.reload(); }

  resetearImagen(){
    this. uploadedFiles = [];
    this.newProduct.value.image = '';
  }

}

