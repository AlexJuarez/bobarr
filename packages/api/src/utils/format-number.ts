export function formatNumber(value: number) {
  if (value >= 10) {
    return `${value}`;
  }

  return `000${value}`.substr(-2, 2);
}
