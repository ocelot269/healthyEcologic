import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from "../../services/comment.service";

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
  @Input() idProduct = null;
  listComents = null;
  comment = null;
  idUser= null;
  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
    console.log(this.idProduct);
    this.listaComentarios();
    this.idUser = localStorage.getItem('idUser');
  }


  listaComentarios(){
     this.commentService.getListCommentsByIdProduct(this.idProduct).subscribe(
      res => {
        console.log(res);
        this.listComents = res;
      },
      err => console.log(err)
    );
  }

  crearComentario(){
      let comentarioObjeto: any = {
        id_product: this.idProduct,
	      id_user: localStorage.getItem('idUser'),
	      comment: this.comment
      }
      if (this.comment && this.idProduct && localStorage.getItem('idUser')) {
          this.commentService.createComment(comentarioObjeto).subscribe(
            res => {
              this.comment= null;
              this.listaComentarios();
            },
            err => console.log(err)
        );
      }
      this.comment= null;
      this.listaComentarios();
  }

}
