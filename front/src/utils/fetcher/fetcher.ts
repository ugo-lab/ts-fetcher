import * as request from './requests';

export default {
  get: <IResponse>(url: string): Promise<IResponse> =>
    request.get<IResponse>(url),

  post: <IResponse>(url: string, body: any): Promise<IResponse> =>
    request.post<IResponse>(url, body)
};
