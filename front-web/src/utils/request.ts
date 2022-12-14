import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServer } from './formatters';

const baseURL = 'http://localhost:8080';
export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (
  filterDate?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    minDate: formatDateToServer(filterDate?.dates?.[0]),
    maxDate: formatDateToServer(filterDate?.dates?.[1]),
    gender: filterDate?.gender,
    ...extraParams
  };
};
