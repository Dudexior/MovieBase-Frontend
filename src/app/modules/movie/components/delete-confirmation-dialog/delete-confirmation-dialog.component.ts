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
    `
  ]
})
export class DeleteConfirmationDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
