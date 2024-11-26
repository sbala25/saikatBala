import { Injectable } from '@angular/core';
import { concatMap, map, Observable, of, repeat, take, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypewriterServiceService {

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
}
