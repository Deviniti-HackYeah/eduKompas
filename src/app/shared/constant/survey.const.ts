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
  'Studia III stopnia',
  'Studia podyplomowe',
  'Inne',
] as const;

export type EducationType = (typeof EducationType)[number];

export const GreatestSatisfaction = [
  'Kontakt z innymi ludźmi: długie rozmowy, wymiana doświadczeń i opinii, wspólna zabawa',
  'Analizowanie danych, wyciąganie wniosków i tworzenie ciekawych rozwiązań',
  'Zajęcia kreatywne: rysowanie, malowanie, komponowanie',
  'Poznawanie innych kultur, oglądanie filmów w różnych językach',
];

export type GreatestSatisfaction = (typeof GreatestSatisfaction)[number];
