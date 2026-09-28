/** Divides a by b; throws RangeError when b is zero. */
export function div(a, b) {
  if (b === 0) throw new RangeError('Division by zero');
  return a / b;
}
