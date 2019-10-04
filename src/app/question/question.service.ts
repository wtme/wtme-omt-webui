import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { createRequestOption } from '@app/shared/util/request-util';
import { IQuestion } from '@app/shared/model/question.model';

type EntityResponseType = HttpResponse<IQuestion>;
type EntityArrayResponseType = HttpResponse<IQuestion[]>;

@Injectable({ providedIn: 'root' })
export class QuestionService {
  public resourceUrl = 'api/questions';

  constructor(protected http: HttpClient) {}

  create(question: IQuestion): Observable<EntityResponseType> {
    return this.http.post<IQuestion>(this.resourceUrl, question, { observe: 'response' });
  }

  update(question: IQuestion): Observable<EntityResponseType> {
    return this.http.put<IQuestion>(this.resourceUrl, question, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IQuestion>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IQuestion[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
