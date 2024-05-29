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

  Callback() {
    this.AddCallback();
  }
  Enum() {
    this.EnumBle();
    this.EnumBt();
    this.EnumNet();
    this.EnumCom();
    this.EnumUsb();
    this.EnumWiFiP2P();
  }
  openPort() {
    this.openport();
  }
  SampleTicket_58MM() {
    this.Test_Pos_SampleTicket_58MM_2();
  }
  SampleTicket_80MM() {
    this.Test_Pos_SampleTicket_80MM_1();
  }
  async testPluginMethod(msg: any) {
    await printPlugin
      .testPluginMethod({ msg: msg })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async enableServices() {
    await printPlugin
      .enableServices()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async AddCallback() {
    await printPlugin
      .AddCallback()
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
  async openport() {
    let sample = {
      type: 'BT4',
      nBaudTable: 115200,
      flowControlIndex: 1,
    };
    const options = { content: sample };
    await printPlugin
      .OpenPort(options)
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async Test_Pos_SampleTicket_80MM_1() {
    await printPlugin
      .Test_Pos_SampleTicket_80MM_1()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  async Test_Pos_SampleTicket_58MM_2() {
    await printPlugin
      .Test_Pos_SampleTicket_58MM_2()
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
