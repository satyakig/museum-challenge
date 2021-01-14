export class RequestStatus {
  executing;
  completed;

  constructor(executing: boolean, completed: boolean) {
    this.executing = executing;
    this.completed = completed;
  }
}

export class SearchData {
  search: string;
  objectIds: number[];
  requestStatus: RequestStatus;

  constructor(search: string, objectIds: number[], requestStatus: RequestStatus) {
    this.search = search;
    this.objectIds = objectIds;
    this.requestStatus = requestStatus;
  }
}

export class ObjectData {
  objectId: number;
  data: Record<string, unknown> | null;
  requestStatus: RequestStatus;

  constructor(
    objectId: number,
    data: Record<string, unknown> | null,
    requestStatus: RequestStatus,
  ) {
    this.objectId = objectId;
    this.requestStatus = requestStatus;
    this.data = data;
  }
}

export class SearchModel {
  search: string;
  selectedItem: number | null;

  constructor(search = '', selectedItem: number | null = null) {
    this.search = search;
    this.selectedItem = selectedItem;
  }
}

export class ResultModel {
  searchMap: Map<string, SearchData>;
  objectsDataMap: Map<number, ObjectData>;

  constructor(
    searchMap: Map<string, SearchData> = new Map<string, SearchData>(),
    objectsDataMap: Map<number, ObjectData> = new Map<number, ObjectData>(),
  ) {
    this.searchMap = searchMap;
    this.objectsDataMap = objectsDataMap;
  }
}
