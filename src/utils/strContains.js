export const strContains = (a, b) => {
  if (typeof b !== 'string') {
    return false; // Jeśli 'b' nie jest stringiem, zwracamy false
  }
  
  return a.toLowerCase().includes(b.toLowerCase());
};