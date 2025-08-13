/**
 * TimelineItem represents a single step in the Timeline section:
 * - title: the heading text shown for this entry
 * - description: an array of paragraphs, each rendered on its own line
 * - date: the abbreviated date string displayed beside the entry on hover/focus
 */
export interface TimelineItem {
  title: string;
  description: string[];
  date: string;
}