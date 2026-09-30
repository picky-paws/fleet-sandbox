/** Divides a by b; throws RangeError on division by zero. */
export function divP114(a, b) {
  if (b === 0) {
    throw new RangeError('divP114: division by zero');
  }
  return a / b;
}
