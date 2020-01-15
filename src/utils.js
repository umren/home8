/* sort by date */
export function dateSort(a, b) {
  return new Date(a.date) - new Date(b.date);
};

/* clear array from undefined values */
export function clear(e) {
  return e !== undefined;
};
