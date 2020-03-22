import { networks } from 'library/utilities/axiosInstances';

export const fetchNetworks = () => {
  return networks.get('?fields=id,name');
};
