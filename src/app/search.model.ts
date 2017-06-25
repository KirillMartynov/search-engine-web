
export class SearchModel {
  constructor(
  public name: string,
  public type: string,
  public designedBy: string
  ) {}

  static parse(json: any): SearchModel {
    return new SearchModel(
      json.name,
      json.type,
      json.designedBy
    );
  }
}
