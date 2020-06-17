import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Employee';
  angForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder, private router: Router) {
    this.createForm();
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
  addCoin(Fname, Lname, Mob_No, Bdate, Address, Sex, Salary, Dno) {
      this.coinservice.addCoin(Fname, Lname, Mob_No, Bdate.split("T")[0], Address, Sex, Salary, Dno);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
