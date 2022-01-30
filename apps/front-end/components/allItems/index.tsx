import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Item, ItemGroup, ItemGroupName } from '../../libs/types';
import Pagination from './pagination';

import cardStyles from '../card.module.scss';
import styles from './allItems.module.scss';

export interface AllItemsProps {
  boldFirstTen: boolean;
  hiddenItemGroups: ItemGroupName[];
  loyaltyItemId: string;
  items: Item[];
  itemGroups: ItemGroup[];
  numberOfItems: number;
}

const AllItems = ({
  boldFirstTen,
  hiddenItemGroups = [],
  loyaltyItemId,
  items,
  itemGroups,
  numberOfItems,
}: AllItemsProps) => {
  const shownItems = useMemo(() => {
    const hiddenItemIds = [loyaltyItemId];

    hiddenItemGroups.forEach((itemGroupName) => {
      const itemGroup = itemGroups.find(
        (group) => group.name === itemGroupName
      );

      itemGroup?.itemIds?.forEach((id) => {
        if (!hiddenItemIds.includes(id)) {
          hiddenItemIds.push(id);
        }
      });
    });

    const shownItems = items.filter((item) => !hiddenItemIds.includes(item.id));

    return shownItems;
  }, [items, itemGroups, hiddenItemGroups, loyaltyItemId]);

  const pages = useMemo(() => {
    return Math.ceil(shownItems.length / numberOfItems);
  }, [shownItems, numberOfItems]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // reset shown page if number of pages changes
    setCurrentPage(1);
  }, [pages]);

  return (
    <section className={styles.container}>
      <h1 className="align-center heading-3">All shop items:</h1>
      <div className={styles.cardsContainer}>
        {shownItems
          .slice((currentPage - 1) * numberOfItems, currentPage * numberOfItems)
          .map((item, index) => {
            const boldItem = boldFirstTen && index <= 9;

            return (
              <div
                data-testid="shop-item"
                className={cardStyles.cardContainer}
                key={item.id}
                style={{ fontWeight: boldItem ? '700' : '400' }}
              >
                <div className={cardStyles.imageContainer}>
                  {item.imageURL && item.imageURL !== '' ? (
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
                <div className={cardStyles.priceContainer}>
                  <h2 className="heading-1">
                    {item.defaultPrice.toLocaleString([], {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination
        currentPage={currentPage}
        numberOfPages={pages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default AllItems;
