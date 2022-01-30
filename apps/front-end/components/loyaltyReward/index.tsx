import { useMemo } from 'react';
import Image from 'next/image';
import styles from './loyaltyRewards.module.scss';
import { Item } from '../../../../libs/types/index';

export interface LoyaltyRewardProps {
  borderColor: string;
  borderSize: string;
  discountPercentage: number;
  itemId: string;
  items: Item[];
}

const LoyaltyReward = ({
  borderColor,
  borderSize,
  discountPercentage,
  itemId,
  items = [],
}: LoyaltyRewardProps) => {
  const item = useMemo(() => {
    const item = items.find((item) => item?.id === itemId);
    return item;
  }, [items, itemId]);

  const newPrice = useMemo(() => {
    if (item) {
      const newPrice =
        item?.defaultPrice - item?.defaultPrice * (discountPercentage / 100);
      return newPrice;
    }
    return 0;
  }, [item, discountPercentage]);

  return (
    <div>
      <h1 className="align-center heading-3">Loyalty reward</h1>
      <div
        data-testid="loyalty-rewards"
        className={styles.container}
        style={{
          outlineColor: borderColor,
          outlineWidth: borderSize,
          outlineOffset: `-${borderSize}`,
        }}
      >
        <div className={styles.imageContainer}>
          {item && item?.imageURL !== '' ? (
            <Image
              alt="introduction"
              layout="fill"
              src={item?.imageURL}
              objectFit="contain"
              objectPosition="center"
              quality={100}
            />
          ) : null}
        </div>
        <h3 className="align-center heading-2 margin-top-1 margin-bottom-4">
          {item?.name}
        </h3>
        <div className={styles.priceContainer}>
          <h2 className="heading-1">
            {newPrice.toLocaleString([], {
              style: 'currency',
              currency: 'EUR',
            })}
          </h2>
          <p className={styles.pill}>{`-${discountPercentage}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyReward;
