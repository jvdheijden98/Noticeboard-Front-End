import { Component, OnInit } from '@angular/core';
import { RESTclientService } from 'src/REST/restclient.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = new FormControl('');
  testObjectForm = new FormGroup({
    getal: new FormControl(''),
    woord: new FormControl(''),
  });
  testString: string;


  constructor(
    private restService: RESTclientService
  ) { }

  testNameUpdate() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    // todo: Use EventEmitter with form value - van tutorial
    // console.warn(this.testObjectForm.value);
     // const getal: number = parseFloat((document.getElementById('getal') as HTMLInputElement).value);
     // const woord: string = (document.getElementById('woord') as HTMLInputElement).value;
    const getal: any = this.testObjectForm.get('getal').value;
    const parsedGetal = parseInt(getal, 10);
    // Parsing omdat anders word de stringify circular ivm DOM object met form values ofzo
    const woord: any = this.testObjectForm.get('woord').value;
    const parsedWoord = String(woord);
    this.addTest(parsedGetal, woord);
  }

  async ngOnInit() { // Naast then evt. catch...
    await this.restService.getHelloWorld()
    .then((data) => this.testString = data);
    // this.testString

  }

  // Call deze met een html button
  async addTest(someNumber: number, someString: string) {
    // Roep rest service aan met het object
    const testObject: any = {};
    testObject.number = someNumber;
    testObject.someString = someString;
    const jsonString = JSON.stringify(testObject);
    await this.restService.postTest(jsonString)
    .then((data) => this.testString = data);
  }


}
