import { GreatestSatisfaction } from '@shared/constant';

export const mockedAnswerBySurvey = (
  satisfaction?: GreatestSatisfaction,
): string => {
  switch (satisfaction) {
    case 'Kontakt z innymi ludźmi: długie rozmowy, wymiana doświadczeń i opinii':
      return 'Widzę, ze mamy do czynienia z przyszłym managerem. Dobrze, powiedz mi jeszcze jakie są Twoje mocne strony?';
    case 'Zajęcia kreatywne: rysowanie, malowanie, komponowanie':
      return 'Widzę, ze mamy do czynienia z humanistą! Dobrze, powiedz mi jeszcze jakie są Twoje mocne strony?';
    case 'Analizowanie danych, wyciąganie wniosków i tworzenie ciekawych rozwiązań':
      return 'Wygląda na to, że rozmawiam ze ścisłym umysłem! Dobrze, powiedz mi jeszcze jakie są Twoje mocne strony?';
    default:
      return 'W porządku! Świetnie się składa! Powiedz w takim razie jaka ścieżka kariery cię interesuje!';
  }
};
