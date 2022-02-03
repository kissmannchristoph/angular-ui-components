import { Component, OnInit } from "angular-ts-decorators";

@Component({
  selector: "app-view",
  template: require("./view.component.html"),
  styles: [require("./view.component.css")]
})
export class ViewComponent implements OnInit {
  ngOnInit(): void {}
}
