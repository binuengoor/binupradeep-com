// Eurotrip 2024 "Binario": looks up photo sources and clip sizes by short name.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../../assets/travel/eurotrip-2024/*.webp', { eager: true });

export function photo(name: string): ImageMetadata {
  const f = files[`../../assets/travel/eurotrip-2024/${name}.webp`];
  if (!f) throw new Error(`Binario: no photo named "${name}" in src/assets/travel/eurotrip-2024/`);
  return f.default;
}

// Pre-encoded silent loops in public/travel/eurotrip-2024/clips/ (width, height).
export const CLIPS: Record<string, [number, number]> = {
  alps: [720, 406], 'brienz-boat': [406, 720], brunch: [720, 630], cyclists: [406, 720],
  ebike: [406, 720], 'keyhole-door': [406, 720], 'piz-gloria': [720, 630], trottibike: [720, 406],
};

/** "d4-2004-fuji-2298" -> "20:04" (the real local time is part of every file name). */
export function timeOf(name: string): string {
  const m = /^d\d+-(\d\d)(\d\d)-/.exec(name);
  return m ? `${m[1]}:${m[2]}` : '';
}
