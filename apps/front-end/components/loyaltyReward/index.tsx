import { useMemo } from 'react';
import Image from 'next/image';
import styles from './loyaltyRewards.module.scss';
import { Item } from '../../../../libs/types/index';

export interface LoyaltyRewardProps {
  borderColor: string;
  borderSize: string;
  discountPercentage: number;
  item: Item;
}

const LoyaltyReward = ({
  borderColor,
  borderSize,
  discountPercentage,
  item,
}: LoyaltyRewardProps) => {
  const newPrice = useMemo(() => {
    const newPrice =
      item.defaultPrice - item.defaultPrice * (discountPercentage / 100);
    return newPrice;
  }, [item, discountPercentage]);

  return (
    <div
      data-testid="loyalty-rewards"
      className={styles.container}
      style={{
        borderColor: borderColor,
        borderWidth: borderSize,
      }}
    >
      <h1 className="align-center heading-3">Loyalty reward</h1>
      <div className={styles.imageContainer}>
        {item.imageURL !== '' ? (
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
          {newPrice.toLocaleString([], { style: 'currency', currency: 'EUR' })}
        </h2>
        <p className={styles.pill}>{`-${discountPercentage}%`}</p>
      </div>
    </div>
  );
};

export default LoyaltyReward;
