import { Component } from '@angular/core';
import { FooterInterface, NavigatorInterface } from './core/models/Core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '40k - Json Server';
  public navigator: NavigatorInterface[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "legions",
      link: "/legions"
    },
    {
      name: "battles",
      link: "/battles"
    },
    {
      name: "about",
      link: "/about"
    }
  ];
  public footer: FooterInterface = {
    creator: "Sergio González Gómez",
    from: "Upgrade-Hub 2022"
  }
}
