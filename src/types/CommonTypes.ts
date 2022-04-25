import { Theme } from '@react-navigation/native/src/types';

import {
  FORM_SCREEN,
  ISSUE_TYPES_SCREEN,
  SUCCESS_SCREEN,
} from 'src/constants/screenNames';
import { ProblemType } from 'src/types/FeedbackTypes';
import { Replace } from 'src/helpers/typeExtensions';

export type RootStackParamList = {
  [FORM_SCREEN]: undefined;
  [ISSUE_TYPES_SCREEN]: {
    problem: ProblemType | null;
    setProblem: (problem: ProblemType | null) => void;
  };
  [SUCCESS_SCREEN]: undefined;
};

export type ColorsType = Theme['colors'] & {
  white: string;
  midnight: string;
  cyanBlue: string;
};

export type ThemeType = Replace<Theme, 'colors', ColorsType>;
