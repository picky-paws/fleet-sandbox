/** Divides a by b; throws RangeError when b is zero (campaign pass 105). */
export function divP105(a, b) {
  if (b === 0) {
    throw new RangeError('Division by zero');
  }
  return a / b;
}
