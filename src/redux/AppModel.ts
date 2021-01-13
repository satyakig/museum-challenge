export class Result {
  search = '';
  data: Record<string, unknown> | null = null;
  completed = false;
  executing = false;
}

export class Search {
  search: string;

  constructor(search: string) {
    this.search = search;
  }
}

export class ResultMap {
  results: Map<string, Result> = new Map();
}
