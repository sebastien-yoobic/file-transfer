import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FileTransferService } from '../../services/filetransfer.service';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private transfer: FileTransferService) {

  }

  download() {
    console.log('button clicked');
    this.transfer.downloadToDevice();
  }

}
