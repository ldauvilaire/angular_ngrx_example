import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Book } from './book.model';

@Injectable()
export class BookService {
    constructor(private http: Http) {}

    getBooks(): Observable<Book[]> {
        const booksServiceUrl = 'assets/data/books.json';
        const headers = new Headers();
        return this.http.get(booksServiceUrl, { headers: headers })
            .map((res: Response) => {
                return <Book[]>res.json();
            });
    }
}
