import { NgModule } from "angular-ts-decorators";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ViewComponent } from "./view/view.component";
import "./styles.css";

@NgModule({
  id: "AppModule",
  imports: [AppRoutingModule],
  declarations: [AppComponent, ViewComponent, ProgressbarComponent],
  /*providers: [
    HeroService,
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule {}
