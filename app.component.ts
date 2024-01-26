import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
      <h1>Zdravo</h1>
      <ul>
        <li *ngFor="let i of DRIVERS">{{i.name}}<br>{{i.id}}<br>{{i.team}}<br>{{i.category}}<br>{{i.points}}
      <br><img src="{{i.iconUrl}}"></li>
      </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives1';

 

   DRIVERS: any[] = [

    //undefined,

    {
        id: 1,
        name: "Max Verstappen",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Max_Verstappen_2017_Malaysia_3_%28cropped%29.jpg",
        team: "Red Bull Racing",
        category: "advanced",
        points: 410
    },
    {
        id: 2,
        name: "Sergio Perez",
        iconUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTHsoEn8ne7PwKglGpKm_zx2Ed1kBpyFGYqOobhWiK8ieLnL5fxO3Vn7DIDraUUDRiWx5V7pTMzYBp6IEg",
        team: "Red Bull Racing",
        category: "begginer",
        points: 380
    },
    {
        id: 3,
        name: "Lewis Hamilton",
        iconUrl: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg",
        team: "Red Bull Racing",
        category: "advanced",
        points: 330
    }

];

 
}
