import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  /* Base Url */
  OUR_REST_API_URL =
    "https://api.edamam.com/search?app_id=094290e0&app_key=f6754f4874d157c5d9c45368bae02f6f";

  constructor(public http: HttpClient) {}

  /**
   * Creates an observable that returns the search of the edamam api
   * @param searchTerm the term to search for
   * @param allergy the list of allergies
   * @param dietary the list of diet requirements
   */
  getDataFromAPI(searchTerm, allergy = [], dietary = []) {
    const health = [...allergy, ...dietary].join("&health="); // health cannot be ',' seperated for the api
    return this.http.get<EdamamResponse>(
      `${this.OUR_REST_API_URL}${searchTerm ? "&q=" + searchTerm : ""}${
        health ? "&health=" + health : ""
      }`
    );
  }
}
/**
 * Types from Edamam api
 */
export interface Params {
  sane: any[];
  q: string[];
  app_key: string[];
  app_id: string[];
}

export interface Ingredient {
  text: string;
  weight: number;
}

export interface ENERCKCAL {
  label: string;
  quantity: number;
  unit: string;
}

export interface FAT {
  label: string;
  quantity: number;
  unit: string;
}

export interface FASAT {
  label: string;
  quantity: number;
  unit: string;
}

export interface FATRN {
  label: string;
  quantity: number;
  unit: string;
}

export interface FAMS {
  label: string;
  quantity: number;
  unit: string;
}

export interface FAPU {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOCDF {
  label: string;
  quantity: number;
  unit: string;
}

export interface FIBTG {
  label: string;
  quantity: number;
  unit: string;
}

export interface SUGAR {
  label: string;
  quantity: number;
  unit: string;
}

export interface PROCNT {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOLE {
  label: string;
  quantity: number;
  unit: string;
}

export interface NA {
  label: string;
  quantity: number;
  unit: string;
}

export interface CA {
  label: string;
  quantity: number;
  unit: string;
}

export interface MG {
  label: string;
  quantity: number;
  unit: string;
}

export interface K {
  label: string;
  quantity: number;
  unit: string;
}

export interface FE {
  label: string;
  quantity: number;
  unit: string;
}

export interface ZN {
  label: string;
  quantity: number;
  unit: string;
}

export interface P {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITARAE {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITC {
  label: string;
  quantity: number;
  unit: string;
}

export interface THIA {
  label: string;
  quantity: number;
  unit: string;
}

export interface RIBF {
  label: string;
  quantity: number;
  unit: string;
}

export interface NIA {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITB6A {
  label: string;
  quantity: number;
  unit: string;
}

export interface FOLDFE {
  label: string;
  quantity: number;
  unit: string;
}

export interface FOLFD {
  label: string;
  quantity: number;
  unit: string;
}

export interface FOLAC {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITB12 {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITD {
  label: string;
  quantity: number;
  unit: string;
}

export interface TOCPHA {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITK1 {
  label: string;
  quantity: number;
  unit: string;
}

export interface SUGARAdded {
  label: string;
  quantity: number;
  unit: string;
}

export interface TotalNutrients {
  ENERC_KCAL: ENERCKCAL;
  FAT: FAT;
  FASAT: FASAT;
  FATRN: FATRN;
  FAMS: FAMS;
  FAPU: FAPU;
  CHOCDF: CHOCDF;
  FIBTG: FIBTG;
  SUGAR: SUGAR;
  PROCNT: PROCNT;
  CHOLE: CHOLE;
  NA: NA;
  CA: CA;
  MG: MG;
  K: K;
  FE: FE;
  ZN: ZN;
  P: P;
  VITA_RAE: VITARAE;
  VITC: VITC;
  THIA: THIA;
  RIBF: RIBF;
  NIA: NIA;
  VITB6A: VITB6A;
  FOLDFE: FOLDFE;
  FOLFD: FOLFD;
  FOLAC: FOLAC;
  VITB12: VITB12;
  VITD: VITD;
  TOCPHA: TOCPHA;
  VITK1: VITK1;
  SUGAR_added: SUGARAdded;
}

export interface ENERCKCAL2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface FAT2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface FASAT2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOCDF2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface FIBTG2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface PROCNT2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOLE2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface NA2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface CA2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface MG2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface K2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface FE2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface ZN2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface P2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITARAE2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITC2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface THIA2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface RIBF2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface NIA2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITB6A2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface FOLDFE2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITB122 {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITD2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface TOCPHA2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface VITK12 {
  label: string;
  quantity: number;
  unit: string;
}

export interface TotalDaily {
  ENERC_KCAL: ENERCKCAL2;
  FAT: FAT2;
  FASAT: FASAT2;
  CHOCDF: CHOCDF2;
  FIBTG: FIBTG2;
  PROCNT: PROCNT2;
  CHOLE: CHOLE2;
  NA: NA2;
  CA: CA2;
  MG: MG2;
  K: K2;
  FE: FE2;
  ZN: ZN2;
  P: P2;
  VITA_RAE: VITARAE2;
  VITC: VITC2;
  THIA: THIA2;
  RIBF: RIBF2;
  NIA: NIA2;
  VITB6A: VITB6A2;
  FOLDFE: FOLDFE2;
  VITB12: VITB122;
  VITD: VITD2;
  TOCPHA: TOCPHA2;
  VITK1: VITK12;
}

export interface Sub {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}

export interface Digest {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub: Sub[];
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
  digest: Digest[];
}

export interface Hit {
  recipe: Recipe;
  bookmarked: boolean;
  bought: boolean;
}

export interface EdamamResponse {
  q: string;
  from: number;
  to: number;
  params: Params;
  more: boolean;
  count: number;
  hits: Hit[];
}
