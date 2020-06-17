import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from './../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  title = 'Edit Employee';
  
  constructor( private route: ActivatedRoute, private router: Router, private service: CoinService, private fb: FormBuilder) {
    this.createForm();
   }

   ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.coin = this.service.editCoin(params['id']).subscribe(res => {
        this.coin = res;
        console.log(res);
      });
    });
  }


   createForm() {
    this.angForm = this.fb.group({
      Fname: ['', Validators.required ],
      Lname: ['', Validators.required ],
      Mob_No: ['', Validators.required ],
      Bdate: ['', Validators.required ],
      Address: ['', Validators.required ],
      Sex: ['', Validators.required ],
      Salary: ['', Validators.required ],
      Dno: ['', Validators.required ]
   });
  }

  updateCoin(Fname, Lname, Mob_No, Bdate, Address, Sex, Salary, Dno) {
    this.route.params.subscribe(params => {
    console.log(Bdate.split("T")[0]);
    this.service.updateCoin(Fname, Lname, Mob_No, Bdate.split("T")[0], Address, Sex, Salary, Dno, params['id']);
    this.router.navigate(['index']);
  });
}

}

