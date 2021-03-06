import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewcard',
  templateUrl: './viewcard.component.html',
  styleUrls: ['./viewcard.component.scss']
})
export class ViewcardComponent implements OnInit {

  constructor(private messageService: ToastrService) { }

  ngOnInit(): void {
  }

  copyText(val: string){
    let msg = '';
    if(val==='Email'){
      val = 'vijayasaisanagaram@yahoo.com';
      msg = "Email ";
    }
    else if(val === 'phone'){
      val = "+91 8919611914";
      msg = "Phone no. "
    }
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.messageService.success( msg + "copied to Clipboard !!!" );	
  }

}
