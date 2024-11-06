import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../views/header/header.component';
import { BannerComponent } from '../views/banner/banner.component';
import { WhyusComponent } from '../views/whyus/whyus.component'; // Import WhyusComponent
import { TestimonialsComponent } from '../views/testimonials/testimonials.component';
import { FooterComponent } from '../views/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, WhyusComponent, TestimonialsComponent, FooterComponent], // Add WhyusComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RentalCar_System_Angular';
}
