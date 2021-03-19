import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './delete-confirmation-dialog.component.html',
  styles: [
    `
      .warningText, button{
        font-size: 1.5rem;
      }

      button{
        height:60px;
        width:90px;
        margin: 20px 40px 20px 40px;
      }

      @media(max-width: 414px){
        button{
          width:100%;
          margin: 10px !important;
        }
      }
    `
  ]
})
export class DeleteConfirmationDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
