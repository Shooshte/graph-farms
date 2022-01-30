import { useMemo } from 'react';
import Image from 'next/image';
import styles from './recommendedItems.module.scss';
import { Item, ItemGroup, ItemGroupName } from '../../../../libs/types/index';

export interface RecommendedItemsProps {
  includeItemImages: boolean;
  items: Item[];
  itemsCount: number;
  itemGroups: ItemGroup[];
  shownItemGroups: ItemGroupName[];
}

const RecommendedItems = ({
  includeItemImages,
  items = [],
  itemsCount,
  itemGroups = [],
  shownItemGroups,
}: RecommendedItemsProps) => {
  const shownItems = useMemo(() => {
    const shownIds: string[] = itemGroups.reduce(
      (previousValue, currentValue) => {
        if (previousValue.length >= itemsCount) {
          return previousValue;
        }

        const { name, itemIds } = currentValue;
        if (shownItemGroups.includes(name)) {
          const newValues = [];
          itemIds.forEach((itemId) => {
            if (!previousValue.includes(itemId)) {
              newValues.push(itemId);
            }
          });
          return [...previousValue, ...newValues];
        }
        return previousValue;
      },
      []
    );

    return items
      .filter(({ id }) => {
        return shownIds.includes(id);
      })
      .slice(0, itemsCount);
  }, [items, itemGroups, itemsCount, shownItemGroups]);

  return shownItems.map((item) => (
    <div
      data-testid="recommended-item"
      className={styles.container}
      key={item.id}
    >
      <h1 className="align-center heading-3">We recommend</h1>
      <div className={styles.imageContainer}>
        {includeItemImages ? (
          <Image
            alt="introduction"
            layout="fill"
            src={item.imageURL}
            objectFit="contain"
            objectPosition="center"
            quality={100}
          />
        ) : null}
      </div>
      <h3 className="align-center heading-2 margin-top-1 margin-bottom-4">
        {item.name}
      </h3>
      <div className={styles.priceContainer}>
        <h2 className="heading-1">
          {item.defaultPrice.toLocaleString([], {
            style: 'currency',
            currency: 'EUR',
          })}
        </h2>
      </div>
    </div>
  ));
};

export default RecommendedItems;
