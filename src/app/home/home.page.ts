import { Component } from '@angular/core';
import { printPlugin } from 'print-plugin';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  async testPluginMethod(msg: any) {
    await printPlugin.testPluginMethod({ msg: msg }).then((res: any) => {
      alert('return value is ' + JSON.stringify(res.value));
      console.log(res)
    }).catch((err:any)=>{
      alert('err value is ' + JSON.stringify(err.value));
    });
  }
}
