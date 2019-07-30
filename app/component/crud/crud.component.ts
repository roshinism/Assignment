import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from "../../service/crud-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  allProducts:any
  selectedProduct:any
  selected=0
  
id=""
name=""
category=""
price=""

  constructor(private crudService:CrudServiceService, private router:Router) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts =function()
  {
    this.crudService.getAllProducts().subscribe((response)=>{
      //console.log(response)
      this.allProducts = response
    })
  }

  viewProduct= function(selectedProduct){
    this.selected = this.allProducts[selectedProduct].id
    this.crudService.getProductById(this.selected).subscribe((response)=>{
        //console.log(response)
        this.selectedProduct = response.name
      })
  }

  deleteProduct= function(sp){
    this.selected = this.allProducts[sp].id
    this.crudService.deleteProductById(this.selected).subscribe((response)=>{
        //console.log(response)
       this.getAllProducts()
      })
  }


  addProduct= function(tempProduct){
    //console.log(tempProduct.value)
    this.newProduct= tempProduct.value
this.crudService.createProduct(this.newProduct).subscribe((response)=>{
  //console.log(response);
  this.getAllProduct()
})
  }

  updateProduct(selectedProduct){
    this.selected = this.allProducts[selectedProduct].id
    this.crudService.getProductById(this.selected).subscribe((response)=>{
        //console.log(response);
     this.name = response.name
     this.category=response.category
     this.price=response.price
     this.id=response.id
     //console.log(this.id)
      })
  }


  updateProductNow=function(){
this.newProduct={
  "name":this.name,
  "category":this.category,
  "price":this.price
}
this.crudService.updateProductById(this.id, this.newProduct).subscribe((response)=>{
  //console.log(response)
  this.getAllProducts()
})
  }

  Edit(selectedId){
    this.selected = this.allProducts[selectedId].id
this.router.navigate(['/editProduct',this.selected])
  }
}
