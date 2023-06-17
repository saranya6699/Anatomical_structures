export enum BM_TYPE {
    G = 'gene',
    P = 'protein'
}
export interface Structure {
    name?: string;
    id?: string;
    rdfs_label?: string;
    b_type?: BM_TYPE;
}
export interface Row {
    anatomical_structures: Structure[];
    cell_types: Structure[];
    biomarkers: Structure[];
}

export interface Terms {
    iri: string;
    annotation:any; 
    obo_id:string;
    label: string;
}

export interface Embedded {
    terms: Terms[]
}

export interface ErrorMessage {
    error: boolean;
    message: string;
}

export interface StructureData {
    iri: string;
    definition: string;
    obo_id: string;
    label: string;
}