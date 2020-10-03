import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  downloadResume(){
    const pdfUrl = '../assets/vijayasai sanagaram.pdf';
    const pdfName = 'vijayasai sanagaram.pdf';
    saveAs(pdfUrl, pdfName);
  }

  downloadCoverLetter(){
    const pdfUrl = '../assets/Vijayasai Sanagaram(cover letter).pdf';
    const pdfName = 'Vijayasai Sanagaram(cover letter).pdf';
    saveAs(pdfUrl, pdfName);
  }

}
