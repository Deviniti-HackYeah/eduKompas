import { EducationType, UserType } from '@shared/constant';

export interface Survey {
  userType: UserType;
  educationType: EducationType;
  city: string;
}
