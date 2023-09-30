export const UserType = [
  'Rodzicem',
  'Absolwentem szkoły/studiów',
  'Kandydatem z zagranicy',
] as const;

export type UserType = (typeof UserType)[number];

export const EducationType = [
  'Szkoła podstawowa',
  'Gimnazjum',
  'Liceum',
  'Studia I stopnia',
  'Studia II stopnia',
  'Inne',
] as const;

export type EducationType = (typeof EducationType)[number];
