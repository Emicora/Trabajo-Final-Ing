import dayjs from 'dayjs/esm';

import { IComment, NewComment } from './comment.model';

export const sampleWithRequiredData: IComment = {
  id: 20452,
};

export const sampleWithPartialData: IComment = {
  id: 19140,
  date: dayjs('2025-12-01T18:00'),
  text: 'lest department pale',
};

export const sampleWithFullData: IComment = {
  id: 28427,
  date: dayjs('2025-12-02T03:52'),
  text: 'trolley',
};

export const sampleWithNewData: NewComment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
