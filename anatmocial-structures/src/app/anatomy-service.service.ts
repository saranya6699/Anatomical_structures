import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ErrorMessage, Row, Structure, StructureData } from './anatomy-structure.model';

@Injectable({
  providedIn: 'root'
})
export class AnatomyService {

  constructor(private _http: HttpClient) { }
  getStructures(): Observable<Structure[]> {
    return this._http.get('https://mmpyikxkcp.us-east-2.awsapprunner.com/v2/1NMfu1bEGNFcTYTFT-jCao_lSbFD8n0ti630iIpRj-hw/949267305').pipe(
      map((res: any) => {
        const anatomicalStructures: Structure[] = res.data.map((structure: Row) => structure.anatomical_structures);
        const st: Structure[] = anatomicalStructures.flatMap(e => e);
        const map = new Map<string, Structure>();
        st.forEach(s => map.set(s.name ?? "", s));
        return Array.from(map.values());
      })
    );
  }
  getStructureData(id: string): Observable<StructureData | ErrorMessage> {
    return this._http.get("https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/" + id.replace(":", "_")).pipe(
      map((res: any) => {
        const { iri, annotation, obo_id, label } = res['_embedded'].terms[0];
        return { iri, definition: annotation.definition && annotation.definition[0], obo_id, label };
      }),
      catchError((err) => {
        return of({
          error: true,
          message: err.statusText
        })
      })
    );

  }
}
