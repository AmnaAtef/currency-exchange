import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getLastDayOfMonthInPastYear(pastYear: number): string[] {
    const currentDate = new Date();
    const lastYear = currentDate.getFullYear() - 1; // Get the past year
    const lastDayOfMonthInPastYear: string[] = [];

    for (let month = 0; month < 12; month++) {
      const lastDayOfMonth = new Date(lastYear, month + 1, 0); // Set day to 0 to get the last day of the previous month

      lastDayOfMonthInPastYear.push(lastDayOfMonth.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
    }

    return lastDayOfMonthInPastYear;
  }
}
