import { formatDistanceToNow } from 'date-fns';

export const formatData = newData => {
  return formatDistanceToNow(new Date(newData), { addSuffix: true });
};
