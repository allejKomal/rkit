export function calculateColumnWidth(
  header: string,
  dataType: 'number' | 'text' | 'array' = 'text'
): number {
  const baseWidth = header.length * 8; // Base width based on header length

  switch (dataType) {
    case 'number':
      return Math.max(60, Math.min(baseWidth, 120)); // Narrow for numbers
    case 'array':
      return Math.max(140, Math.min(baseWidth * 1.5, 300)); // Wider for arrays
    case 'text':
    default:
      return Math.max(80, Math.min(baseWidth * 1.2, 250)); // Medium for text
  }
}
