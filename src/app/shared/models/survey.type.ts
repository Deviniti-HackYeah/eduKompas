import {
  GreatestSatisfaction,
  EducationType,
  UserType,
} from '@shared/constant';

export interface Survey extends SurveySliders {
  userType: UserType;
  educationType: EducationType;
  city: string;
  greatestSatisfaction: GreatestSatisfaction;
}

export interface SurveySliders {
  doYouKnowWhatToStudy: number;
  doYouWantToWorkWithPeople: number;
  doYouWantToOpenBusiness: number;
  areYouReadyToCoverCosts: number;
}
