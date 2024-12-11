import { Injectable } from '@angular/core';
import { concatMap, map, Observable, of, repeat, take, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getTypewriterEffect(words: string[], speed: number = 250): Observable<string> {
    return of(...words).pipe(
      concatMap(word => this.typeWord(word, speed)),
      repeat()
    );
  }

  private typeWord(word: string, speed: number): Observable<string> {
    let currentText = '';
    return timer(0, speed).pipe(
      map(i => currentText += word.charAt(i)),
      take(word.length + 1) // +1 to include the last character
    );
  }

  getAge(start_date: any, end_date: any) {
    let start_date_copy;
    if (end_date)
      start_date_copy = new Date(end_date);
    else
      start_date_copy = new Date();
    let end_date_copy = new Date(start_date);
    let totalMonths = (start_date_copy.getFullYear() - end_date_copy.getFullYear()) * 12 + start_date_copy.getMonth() - end_date_copy.getMonth();
    totalMonths += start_date_copy.getDay() < end_date_copy.getDay() ? -1 : 0;
    let years = start_date_copy.getFullYear() - end_date_copy.getFullYear();
    if (end_date_copy.getMonth() > start_date_copy.getMonth())
      years = years - 1;
    else if (end_date_copy.getMonth() === start_date_copy.getMonth())
      if (end_date_copy.getDate() > start_date_copy.getDate())
        years = years - 1;

    let days;
    let months;

    if (end_date_copy.getDate() > start_date_copy.getDate()) {
      months = (totalMonths % 12);
      if (months == 0)
        months = 11;
      let x = start_date_copy.getMonth();
      switch (x) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
          let a = end_date_copy.getDate() - start_date_copy.getDate();
          days = 31 - a;
          break;
        }
        default: {
          let a = end_date_copy.getDate() - start_date_copy.getDate();
          days = 30 - a;
          break;
        }
      }

    }
    else {
      days = start_date_copy.getDate() - end_date_copy.getDate();
      if (end_date_copy.getMonth() === start_date_copy.getMonth())
        months = (totalMonths % 12);
      else
        months = (totalMonths % 12) + 1;
    }
    let age = (years ? years + ' years ' : '') + (months ? months + ' months ' : '') + (days ? days + ' days' : '');
    if (!age)
      age = "0 days"
    return age;
  }
}
