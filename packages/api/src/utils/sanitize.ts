export function sanitize(str: string) {
  return str
    .toLowerCase()
    .replace(/,|\.|-|\(\)|\[|\]|[az]|:/g, ' ')
}
