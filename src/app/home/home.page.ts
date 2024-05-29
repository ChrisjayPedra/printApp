import { Component } from '@angular/core';
import { printPlugin } from 'print-plugin';
import { pprintplugin } from 'p-print-plugin';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  ngOnInit() {
    this.enableServices();
  }

  test() {
    this.AddCallback();
    this.TestFunction();
  }
  Enum() {
    this.EnumBle();
    this.EnumBt();
    this.EnumNet();
    this.EnumCom();
    this.EnumUsb();
    this.EnumWiFiP2P();
  }
  testPluginMethod(msg: any) {
    printPlugin
      .testPluginMethod({ msg: msg })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  enableServices() {
    printPlugin
      .enableServices()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  AddCallback() {
    printPlugin
      .AddCallback()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async TestFunction() {
    await printPlugin
      .TestFunction()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async EnumBle() {
    await printPlugin
      .EnumBle()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async EnumBt() {
    await printPlugin
      .EnumBt()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async EnumNet() {
    await printPlugin
      .EnumNet()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async EnumCom() {
    await printPlugin
      .EnumCom()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async EnumUsb() {
    await printPlugin
      .EnumUsb()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async EnumWiFiP2P() {
    await printPlugin
      .EnumWiFiP2P()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
