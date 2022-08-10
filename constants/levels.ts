export enum Levels {
  'level 0',
  'level 1',
  'level 2',
  'level 3',
  'level 4',
  'level 5',
  'level 6',
}

export const levels: Record<Levels, string> = {
  0: 'Wants to learn more',
  1: 'Used it on something small',
  2: 'Used a few times',
  3: 'Have worked or built something with it',
  4: 'Works or built multiple things with it',
  5: 'Works with it most days, built enterprise applications with it',
  6: 'Teaches it',
};
