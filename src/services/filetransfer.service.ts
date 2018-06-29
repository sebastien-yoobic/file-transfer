import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { Injectable } from '@angular/core';

@Injectable()
export class FileTransferService {

    constructor(private transfer: FileTransfer, private file: File) { }

    downloadToDevice(){
        const fileTransfer: FileTransferObject = this.transfer.create();
        const url = 'https://res.cloudinary.com/www-yoobic-com/image/upload/v1525955530/b3jb3vvk0hzs5es6hoeu.pdf';
        fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
            console.log('download complete: ' + entry.toURL());
          }, (error) => {
            // handle error
            console.error('error with download', error);
          });
    }
}