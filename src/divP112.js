/** Divides a by b; throws a RangeError when b is zero. */
export function divP112(a, b) {
  if (b === 0) {
    throw new RangeError('division by zero');
  }
  return a / b;
}
