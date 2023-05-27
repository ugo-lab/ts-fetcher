import { IData } from '../../models';
import f from '../../utils/fetcher/fetcher';

export const getData = (id: string) => f.get<IData>(`/data/${id}`);
