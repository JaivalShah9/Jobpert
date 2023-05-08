import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import {  FormGroup, Validators } from '@angular/forms';
import { emailOrPhoneRequired } from '../shared/customerror.directive';

interface City {
    name: string,
    code: string
}
// export interface name{
//   fname: string,
//   mname: string,
//   lname: string
// }

// interface Gender{
//   gender1:string,
  
// }

 

 
@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css'],
})

export class JobportalComponent implements OnInit {

  uploadedFiles: any[] = [];

  key: string='city';
  
  myItem: any;

  key1: string= 'Name';
  myitem1: string='';


  
  

  

 
  jobForm! : FormGroup
  // gender: Gender[];
  // selectedGender!: any;
  cities: City[];
   selectedCity="";
    val1!: string;
    date1! : Date[];
     es: any;
     value!: any;
     Firstname!:any;
     Email!: any
     
     
     

     

  constructor(private fb: FormBuilder) {
    
    
     this.cities = [
            {name: 'Mr.', code: 'NY'},
            {name: 'Ms.', code: 'RM'},
            {name: 'Dr.', code: 'LDN'},
            {name: 'Mrs.', code: 'IST'},
            {name: 'Prof.', code: 'PRS'}
        ];

        this.jobForm = this.fb.group({
          
    firstName: [''],
    middleName:['', Validators.required],
    lastName: [''],
    contactType: [''],
    contacts: this.fb.group({
      contactType: ['-1',[emailOrPhoneRequired()]],
      email: [''],
      // phone: [''],
    }),
    skills: this.fb.array([]),
  });
  }
  


   get firstName(){
    
        return this.jobForm.get('firstName');
   }

    get middleName(){
    return this.jobForm.get('middlename');
   }

 
  preview: string = '';
 
  ngOnInit(){
        this.es = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
            today: 'Hoy',
            clear: 'Borrar'
        }

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
    

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);

        
          localStorage.setItem("date",JSON.stringify(this.date1))
        
       
  }
      onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
      }

 
  // save() {
    
  //   console.log(this.jobForm)
  //   this.preview = JSON.stringify(this.jobForm.value);
    
  // }
 
  get skillsForms() {
    return this.jobForm.get('skills') as FormArray;
  }
 
  
  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        address1: [''],
        address2: [''],
        state: [''],
        city:[''],
        country:[''],
        pincode:['']
      })
    );
  }
 
  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }
  storeAdd(){
     console.log('hi');
    localStorage.setItem(this.key,this.selectedCity);
    this.myItem=localStorage.getItem(this.key)
    
    
     
    
  }

  sampleSetValues() {
this.jobForm.setValue({
  firstName: 'Jaival',
  lastName: 'Shah',
  contacts: {
	contactType: 'email',
	email: 'jaival@tydy.it.',
	phone: '9879553929',
  },
  skills: [],
});


}
 get contactType(){
    return this.jobForm.get("contacts.contactType");
}

final(){
  console.log('hi');
  let name1=document.querySelector("#firstName") || "abc";
  var input = document.getElementById("firstName");
  // localStorage.setItem("name",JSON.stringify(this.firstName));
  // console.log(name1)
   localStorage.setItem(this.key,this.selectedCity);
    this.myItem=localStorage.getItem(this.key);
  // localStorage.setItem('firstname',JSON.stringify(this.middleName))
  console.log(this.date1);
    //  localStorage.setItem("date",JSON.stringify(this.date1)),
    //  localStorage.setItem("number",JSON.stringify(this.val1)),
    //  localStorage.setItem("Firstname",JSON.stringify(this.firstname)),
    //  localStorage.setItem("email",JSON.stringify(this.Email)),
     console.log(this.jobForm.getRawValue())
    
     

    
}


}
