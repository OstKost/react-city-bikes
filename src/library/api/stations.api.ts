import { networks } from 'library/utilities/axiosInstances';

export const fetchStations = (id: string) => {
  return networks.get(`/${id}`);
};
