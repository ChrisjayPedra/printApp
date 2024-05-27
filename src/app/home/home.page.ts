import { Component } from '@angular/core';
import { printPlugin } from 'print-plugin';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  ngOnInit(){
      
  }

  test(){
    this.enableServices();
    this.addCallBack();
    this.enumBle();
  }
   testPluginMethod(msg: any) { 
     printPlugin.testPluginMethod({ msg: msg }).then((res: any) => {
      console.log(res)
    }).catch((err:any)=>{
     console.log(err)
    });
  }
  enableServices() {
     printPlugin.enableServices().then((res: any) => {
      console.log(JSON.stringify(res))
    }).catch((err:any)=>{
      console.log(err)
    });
  }
  addCallBack() {
    printPlugin.PrintAddCallBack().then((res: any) => {
     console.log(JSON.stringify(res))
   }).catch((err:any)=>{
    console.log(err)
   });
 }
 enumBle() {
  printPlugin.EnumBle().then((res: any) => {
   console.log(JSON.stringify(res))
 }).catch((err:any)=>{
   console.log(err)
 });
}
}
