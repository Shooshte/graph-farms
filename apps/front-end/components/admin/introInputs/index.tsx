import { useContext, useMemo } from 'react';

import WidgetRulesContext from '../../../context/rules';

import styles from './introInputs.module.scss';

const IntroInputs = () => {
  const { widgetRules } = useContext(WidgetRulesContext);

  const sortedIntroRules = useMemo(() => {
    // TODO abstract this sorting for the rest of the widgets
    return widgetRules.intro.sort((ruleA, ruleB) => {
      const isMoreSpecific = ruleA.specificity - ruleB.specificity;
      if (isMoreSpecific !== 0) {
        return isMoreSpecific;
      } else {
        return Date.parse(ruleB.createdAt) - Date.parse(ruleA.createdAt);
      }
    });
  }, [widgetRules]);

  return (
    <ul>
      <h2 className="heading-3">Intro</h2>
      {sortedIntroRules.map(
        ({
          id,
          filterArguments = [],
          widgetSettings: {
            displayOrder,
            props: { imageUrl, introText },
          },
        }) => {
          return (
            <li
              className={styles.widgetRule}
              key={`widget-rule-${imageUrl}-${introText}-${id}`}
            >
              <p className="text">
                {filterArguments.length > 0 ? (
                  <h4 className="heading-4">
                    When user has&nbsp;
                    {filterArguments.map((argument) => {
                      return `${argument[0]} : ${argument[1]} `;
                    })}
                  </h4>
                ) : (
                  <h4 className="heading-4">For all users</h4>
                )}
              </p>
              {displayOrder > 0 ? (
                <>
                  <p className="text">
                    {`Intro has display order: ${displayOrder}`}
                  </p>
                  <p className="text">Intro has text: {`${introText}`}</p>
                  <p className="text">Intro has imageUrl: {`${imageUrl}`}</p>
                </>
              ) : (
                <p className="text">Intro is not displayed.</p>
              )}
            </li>
          );
        }
      )}
    </ul>
  );
};

export default IntroInputs;
