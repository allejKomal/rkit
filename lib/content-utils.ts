import { type Value } from 'platejs';

/**
 * Shallow comparison for Plate.js Value objects
 * Compares the structure without deep diving into content
 */
export function shallowCompareValue(a: Value, b: Value): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  // Quick check: compare top-level node types and structure
  for (let i = 0; i < a.length; i++) {
    const nodeA = a[i];
    const nodeB = b[i];

    if (nodeA.type !== nodeB.type) return false;
    if (nodeA.children?.length !== nodeB.children?.length) return false;
  }

  return true;
}

/**
 * Fast hash function for content comparison
 */
export function hashValue(value: Value): string {
  let hash = '';

  for (const node of value) {
    hash += node.type + (node.children?.length || 0);
    if (node.children) {
      for (const child of node.children) {
        if ('text' in child && typeof child.text === 'string') {
          hash += child.text.length;
        }
      }
    }
  }

  return hash;
}
