export const englishMapping = {
  esc: [40, 40, 36, 24],
  f1: [40, 40, 101, 24],
  f2: [40, 40, 165, 24],
  f3: [40, 40, 229, 24],
  f4: [40, 40, 293, 24],
  f5: [40, 40, 357, 24],
  f6: [40, 40, 421, 24],
  f7: [40, 40, 485, 24],
  f8: [40, 40, 549, 24],
  f9: [40, 40, 613, 24],
  f10: [40, 40, 677, 24],
  f11: [40, 40, 741, 24],
  f12: [40, 40, 805, 24],
  help: [60, 40, 882, 24],
  $: [55, 55, 36, 80],
  '1': [55, 55, 101, 80],
  '2': [55, 55, 165, 80],
  '3': [55, 55, 229, 80],
  '4': [55, 55, 293, 80],
  '5': [55, 55, 357, 80],
  '6': [55, 55, 421, 80],
  '7': [55, 55, 485, 80],
  '8': [55, 55, 549, 80],
  '9': [55, 55, 613, 80],
  '0': [55, 55, 677, 80],
  '-': [55, 55, 741, 80],
  '+': [55, 55, 805, 80],
  delete: [60, 55, 882, 80],
  tab: [80, 50, 50, 142],
  q: [55, 55, 128, 142],
  w: [55, 55, 192, 142],
  e: [55, 55, 256, 142],
  r: [55, 55, 320, 142],
  t: [55, 55, 384, 142],
  y: [55, 55, 448, 142],
  u: [55, 55, 512, 142],
  i: [55, 55, 576, 142],
  o: [55, 55, 640, 142],
  p: [55, 55, 704, 142],
  '{': [55, 55, 768, 142],
  '}': [55, 55, 832, 142],
  '\\': [55, 55, 896, 142],
  capslock: [100, 55, 60, 206],
  a: [55, 55, 145, 206],
  s: [55, 55, 209, 206],
  d: [55, 55, 273, 206],
  f: [55, 55, 337, 206],
  g: [55, 55, 401, 206],
  h: [55, 55, 465, 206],
  j: [55, 55, 529, 206],
  k: [55, 55, 593, 206],
  l: [55, 55, 657, 206],
  ':': [55, 55, 721, 206],
  '*': [55, 55, 785, 206],
  enter: [100, 55, 872, 206],
  left_shift: [130, 55, 75, 272],
  z: [55, 55, 177, 272],
  x: [55, 55, 241, 272],
  c: [55, 55, 305, 272],
  v: [55, 55, 369, 272],
  b: [55, 55, 433, 272],
  n: [55, 55, 497, 272],
  m: [55, 55, 561, 272],
  ',': [55, 55, 625, 272],
  '.': [55, 55, 689, 272],
  '/': [55, 55, 753, 272],
  right_shift: [130, 55, 857, 272],
  left_ctrl: [76, 55, 49, 335],
  left_windows: [76, 55, 136, 335],
  left_alt: [76, 55, 223, 335],
  space: [380, 55, 467, 335],
  right_alt: [76, 55, 707, 335],
  right_windows: [76, 55, 794, 335],
  right_ctrl: [76, 55, 883, 335],
  arrow_left: [55, 55, 1020, 335],
  arrow_down: [55, 55, 1084, 335],
  arrow_right: [55, 55, 1148, 335],
  arrow_up: [55, 55, 1084, 272],
  f13: [55, 55, 1020, 24],
  f14: [55, 55, 1084, 24],
  f15: [55, 55, 1148, 24],
  ins: [55, 55, 1020, 80],
  home: [55, 55, 1084, 80],
  pg_up: [55, 55, 1148, 80],
  del: [55, 55, 1020, 142],
  end: [55, 55, 1084, 142],
  pg_down: [55, 55, 1148, 142]
}

export class VideoChapter {
  startXP: number;
  widthP: number;
  activatedAction: number;
  transcript: string;
  manuscript: string;
  effects: Object;

  constructor(startXP: number, widthP: number, activatedAction: number, effects: Object = {}) {
    this.startXP = startXP;
    this.widthP = widthP;
    this.activatedAction = activatedAction;
    this.effects = effects;
    this.transcript = '';
    this.manuscript = '';
  }
}