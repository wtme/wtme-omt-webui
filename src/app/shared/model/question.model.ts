export interface IQuestion {
  id?: number;
  version?: number;
  createdDate?: string;
  lastModifiedDate?: string;
  createdBy?: number;
  lastModifiedBy?: number;
  title?: string;
  description?: string;
}

export class Question implements IQuestion {
  constructor(
    public id?: number,
    public version?: number,
    public createdDate?: string,
    public lastModifiedDate?: string,
    public createdBy?: number,
    public lastModifiedBy?: number,
    public title?: string,
    public description?: string
  ) {}
}
