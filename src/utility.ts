export function idMaker(): string {
  return `${Math.floor(Math.random() * 1000)}-${Date.now()}`;
}
