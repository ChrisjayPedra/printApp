import { Component } from '@angular/core';

import { scanPlugin, scanPluginPlugin } from 'scan-plugin-ionic-cjp';
const {test_login,getToken} = require('xentra-plugins');


// import { suncashradius } from 'suncashradius';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  ngOnInit() {
    // this.enableServices();
    // this._test_login2()
    this._test_login();
    this.getToken();
  }


  
  async  _test_login() {

    const headers = {
      ProgramKey: 'ARDENTQA2023',
      ApiKey: 'ARDENTQA2023PROP',
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46QGRtMW4xMjM0',
    };
    const body = {
      MobileNumber: '7134569924',
      Password: 'Password@123',
      LoginType: 'MOBILE',
    };
    ;
      try {
        const result = await test_login(headers,body);
        console.log(result.ResponseData[0].SessionId);
      } catch (error) {
        console.error('Login failed:', error);
      }
    }

  async  getToken() {
      const headers = {
        'Content-Type': 'application/json',
      };
      const body = {
        USERNAME: 'ARDENTAPP',
        PASSWORD: '@PPKONNECT2024', 
      };
      ;
        try {
          const result = await getToken(headers,body);
          console.log('get token ',result);
        } catch (error) {
          console.error('Login failed:', error);
        }
      }
  

    

  // // Callback() {
  // //   this.AddCallback();
  // // }
  // // Enum() {
  // //   this.EnumBle();
  // //   this.EnumBt();
  // //   this.EnumNet();
  // //   this.EnumCom();
  // //   this.EnumUsb();
  // //   this.EnumWiFiP2P();
  // // }
  // // openPort() {
  // //   this.openport();
  // // }
  // // closePort() {
  // //   this.ClosePort();
  // // }
  // // SampleTicket_58MM2() {
  // //   this.Test_Pos_SampleTicket_58MM_2();
  // // }
  // // SampleTicket_58MM1() {
  // //   this.Test_Pos_SampleTicket_58MM_1();
  // // }
  // // SampleTicket_80MM1() {
  // //   this.Test_Pos_SampleTicket_80MM_1();
  // // }
  // // test_Port_Read() {
  // //   this.Test_Port_Read();
  // // }
  // // test_Pos_PrintSelfTestPage() {
  // //   this.Test_Pos_PrintSelfTestPage();
  // // }
  // async StopDecoding() {
  //   await scanPlugin
  //     .StopDecoding()
  //     .then((res: any) => {
  //       console.log(JSON.stringify(res));
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // }
  // async init() {
  //   await scanPlugin
  //     .init()
  //     .then((res: any) => {
  //       console.log(JSON.stringify(res));
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // }
  // async StartDecoding() {
  //   await scanPlugin
  //     .StartDecoding()
  //     .then((res: any) => {
  //       console.log(JSON.stringify(res));
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // }

  // // async test(){
  // //  await scanPlugin.addListener('decodedDataReceived', (data) => {
  // //     console.log('Decoded Data:', data);
    
  // //     // Handle the decoded data as needed
  // //     const codeType = data.codeType;
  // //     const decodedData = data.data;
    
  // //     // Perform actions with the decoded data
  // //   });
    
  // // }
  
 
  

  // // async AddCallback() {
  // //   await printPlugin
  // //     .AddCallback()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async RemoveCallback() {
  // //   await printPlugin
  // //     .RemoveCallback()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async EnumBle() {
  // //   await printPlugin
  // //     .EnumBle()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async EnumBt() {
  // //   await printPlugin
  // //     .EnumBt()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async EnumNet() {
  // //   await printPlugin
  // //     .EnumNet()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async EnumCom() {
  // //   await printPlugin
  // //     .EnumCom()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async EnumUsb() {
  // //   await printPlugin
  // //     .EnumUsb()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async EnumWiFiP2P() {
  // //   await printPlugin
  // //     .EnumWiFiP2P()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async ClosePort() {
  // //   await printPlugin
  // //     .ClosePort()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async openport() {
  // //   let sample = {
  // //     type: 'BT4',
  // //     nBaudTable: 115200,
  // //     flowControlIndex: 1,
  // //   };
  // //   const options = { content: sample };
  // //   await printPlugin
  // //     .OpenPort(options)
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async Test_Pos_SampleTicket_80MM_1() {
  // //   await printPlugin
  // //     .Test_Pos_SampleTicket_80MM_1()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async Test_Pos_SampleTicket_58MM_2() {
  // //   await printPlugin
  // //     .Test_Pos_SampleTicket_58MM_2()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async Test_Port_Read() {
  // //   await printPlugin
  // //     .Test_Port_Read()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async Test_Pos_PrintSelfTestPage() {
  // //   await printPlugin
  // //     .Test_Pos_PrintSelfTestPage()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async Test_Pos_SampleTicket_58MM_1() {
  // //   await printPlugin
  // //     .Test_Pos_SampleTicket_58MM_1()
  // //     .then((res: any) => {
  // //       console.log(JSON.stringify(res));
  // //     })
  // //     .catch((err: any) => {
  // //       console.log(err);
  // //     });
  // // }
  // // async showContentOnSecondaryScreen(){
  // //   // await printPlugin.ShowContentOnSecondaryScreen()
  // //   // .then((res:any)=>{
  // //   //   console.log(JSON.stringify(res));
  // //   // })
  // //   // .catch((err:any)=>{
  // //   //   console.log(JSON.stringify(err));
  // //   // })
  // // }
  
  // // async  _test_login2(): Promise<void> {
  // //   try {
  // //     const result = await test_login_2('7134569924', 'Password@123', 'MOBILE');
  // //     console.log(result);
  // //   } catch (error) {
  // //     console.error('Login failed:', error);
  // //   }
  // // }
  // // // async suncashradius(){
  // // //   await suncashradius
  // // //   .pluginPermissionMethod()
  // // //   .then((res:any)=>{
  // // //     console.log(JSON.stringify(res));
  // // //   })
  // // //   .catch((err:any)=>{
  // // //     console.log(err);
  // // //   })
  // // // }


  
}
