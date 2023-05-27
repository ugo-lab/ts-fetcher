import { ensureError, setJwt, setUrl } from './fetcherUtils';

export const get = <IResponse>(url: string): Promise<IResponse> =>
  fetch(setUrl(url), {
    headers: {
      Authorization: `Bearer ${setJwt()}`
    }
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.statusText);
    })
    .then((data) => data as IResponse)
    .catch((err) => {
      const error = ensureError(err);
      throw new Error(error.message);
    });

export const post = <IResponse>(url: string, body: any): Promise<IResponse> =>
  fetch(setUrl(url), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${setJwt()}`
    }
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.statusText);
    })
    .then((data) => data as IResponse)
    .catch((err) => {
      const error = ensureError(err);
      throw new Error(error.message);
    });
