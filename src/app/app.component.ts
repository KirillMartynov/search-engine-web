import { Component } from '@angular/core';
import { AppService } from './app.service';
import { SearchModel } from './search.model';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private results: SearchModel[] = [];
  private query: string;
  private showCount: boolean = false;
  private operationInProgress: boolean = false;
  private snack: any;

  constructor(
  private service: AppService,
  private snackBar: MdSnackBar
  ) {
  }

  private async onQueryChanged(event: any) {
    if (event.keyCode == 13 || event.charCode == 13) {
      console.log(this.query);

      this.results = [];

      if (!this.query) {
        this.showCount = false;
        return;
      }

      if (this.snack) {
        this.snack.dismiss();
        this.snack = null;
      }

      this.operationInProgress = true;
      try {
        this.results = await this.service.find(this.query);
        this.showCount = true;
        console.log(this.results);
      } catch(e) {
        console.log("Error occurred", e);
        this.snack = this.snackBar.open(this.convertToReadableText(e), "OK :(", { duration:7000});
      }

      this.operationInProgress = false;
    }
  }

  private convertToReadableText(error: any): string {
    if (error.status == 600) {
      return "Incorrect query";
    }

    if (error.status == 504) {
      return "Server is not available. Please check proxy.config.json file. It may be pointing to wrong server address.";
    }

    return error.text();
  }
}
