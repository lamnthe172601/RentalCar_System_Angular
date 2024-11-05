import { Component } from '@angular/core';
import { RentalContract } from '../../../Models/rental-contract';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookinglist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookinglist.component.html',
  styleUrl: './bookinglist.component.scss'
})
export class BookinglistComponent {
  bookings: RentalContract[] = [];
  
}
