import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material';
import {  SubmitpopupComponent} from "../submitpopup/submitpopup.component";
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public myform: any;
  public data: any;

  constructor(public formbuilder: FormBuilder, public _http: HttpClient, public dialog: MatDialog, private readonly meta: MetaService) {
 
      this.meta.setTitle('Appliqate | Contact Us');
      this.meta.setTag('og:description', 'Appliqate aspires to lead the future of payment processing for businesses by incorporating the method of blockchain payments. ');
      this.meta.setTag('og:title', 'This is dynamic title with meta og ');
      this.meta.setTag('og:url', 'http://www.appliqate.com/contact');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'http://www.appliqate.com/assets/images/biglogo2.png');


    this.myform = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      fname: ['', Validators.required],
      lname: [''],
      // pnumber: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
      pnumber: [''],
      subfild: [''],
      description: ['', Validators.required],
    })
  }


  ngOnInit() {

  }

  doSubmit() {
    console.log('ok');
    this.data = this.myform.value;
    console.log(this.data);
    for (let i in this.myform.controls) {
      this.myform.controls[i].markAsTouched();
    }
    if (this.myform.valid) {

      let link = 'http://192.169.196.208:7051/contactUs_applicant';
      let data = {data: this.myform.value};
      this._http.post(link, data)
          .subscribe(res => {

            let result: any = {};
            result = res;
            console.log(result);
            if (result.status == 'success') {

              this.myform.reset();
             // this.opencontactDialog();
              const dialogRef = this.dialog.open(SubmitpopupComponent);
              setTimeout(()=>{

                dialogRef.close();
              },2000);
              // this.inputUntouch(this.myform,'email');
              this.myform.controls['fname'].clearValidators();
              this.myform.controls['fname'].updateValueAndValidity();
              this.myform.controls['description'].clearValidators();
              this.myform.controls['description'].updateValueAndValidity();
              this.myform.controls['email'].clearValidators();
              this.myform.controls['email'].updateValueAndValidity();

            }
          })

    }

  }

  inputUntouch(form: any, val: any) {
    //  console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }

  opencontactDialog() {
    const dialogRef = this.dialog.open(SubmitpopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


