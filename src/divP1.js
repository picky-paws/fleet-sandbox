/** Returns a divided by b; throws RangeError when b is zero. */
export function divP1(a, b) {
  if (b === 0) throw new RangeError('divP1: division by zero');
  return a / b;
}
