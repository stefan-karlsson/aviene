export interface HttpRequest<
  TBody = unknown,
  TParams = unknown,
  TQuery = unknown,
> {
  path: string;
  method: string;
  headers: Record<string, string | undefined>;
  body: TBody;
  params: TParams;
  query: TQuery;
  requestId?: string;
}

export interface HttpResponse<T = unknown> {
  statusCode: number;
  headers?: Record<string, string>;
  body?: T;
}
