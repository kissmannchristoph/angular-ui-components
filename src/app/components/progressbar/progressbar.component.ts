import { Component, OnInit } from "angular-ts-decorators";

@Component({
  selector: "app-comp-progressbar",
  template: require("./progressbar.html"),
  styles: [require("./style.css")]
})
export class ProgressbarComponent implements OnInit {
  ngOnInit(): void {}
}
