export function isCoordinate(coordinate) {
  if (coordinate.length < 8 || globalThis.isNaN(coordinate)) return false;
  return true;
}
