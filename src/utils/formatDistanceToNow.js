import { formatDistanceToNow } from 'date-fns';

export const formatData = newdata => {
  return formatDistanceToNow(new Date(newdata), { addSuffix: true });
};
