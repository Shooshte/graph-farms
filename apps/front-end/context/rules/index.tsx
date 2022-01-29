import { createContext } from 'react';
import { WidgetRules } from '../../../../libs/mockData/widgetSettings';

export type WidgetRulesContextState =
  | {
      widgetRules: WidgetRules;
      setWidgetRules: (newRules: WidgetRules) => void;
    }
  | undefined;

export const WidgetRulesContext =
  createContext<WidgetRulesContextState>(undefined);

export default WidgetRulesContext;
