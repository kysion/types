import type { Dayjs } from 'dayjs';

export class SettingType<T> {
  name: string = '';
  values: T | null = null;
  desc: string = '';
  unionMainId: React.Key = 0;
  userId: React.Key = 0;
  createdAt: Date | string = '';
  updatedAt: Date | string = '';
}

export interface SemesterType {
  semesterId: React.Key;
  semesterTitle?: string;
  semesterUpDown?: 1 | 2;
  beginDate: string | undefined;
  endDate: string | undefined;
  beginDateUp: Dayjs | undefined;
  endDateUp: Dayjs | undefined;
  beginDateDown: Dayjs | undefined;
  endDateDown: Dayjs | undefined;
}

export interface SemesterTableColumnType {
  keyIndex: React.Key;
  semester: string;
  semesterTitle: string;
  beginDate: string;
  endDate: string;
  srcData: SemesterType;
}
