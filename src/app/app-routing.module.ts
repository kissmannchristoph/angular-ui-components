import { StateProvider } from "@uirouter/angularjs";
import { Ng1StateDeclaration } from "@uirouter/angularjs/lib/interface";
import { getTypeName, NgModule } from "angular-ts-decorators";
import { ViewComponent } from "./view/view.component";

export interface UiState extends Ng1StateDeclaration {
  component?: any;
}

const routes: UiState[] = [
  { name: "index", url: "", redirectTo: "dashboard" },
  { name: "dashboard", url: "/view", component: ViewComponent }
];

function getNg1StateDeclaration(state: UiState) {
  if (state.component && typeof state.component !== "string") {
    state.component = getTypeName(state.component);
  }
  return state;
}

@NgModule({
  id: "AppRoutingModule",
  imports: ["ui.router"]
})
export class AppRoutingModule {
  static config($stateProvider: StateProvider) {
    "ngInject";
    routes.forEach((route) =>
      $stateProvider.state(getNg1StateDeclaration(route))
    );
  }
}
