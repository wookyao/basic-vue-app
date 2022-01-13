export type JSONType = { [key: string | symbol | number]: unknown };

export interface IHttpRes {
  config?: JSONType;
  data: {
    code: number;
    message: string;
    data: string | null | number | JSONType | [];
  };
  headers?: JSONType;
  request?: JSONType;
  status?: number;
  statusText?: string;
  fail?: Boolean;
}

export interface ISelectOptions {
  name: string;
  value: string | number | symbol | undefined;
}
