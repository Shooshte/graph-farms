import Image from 'next/image';
import styles from './intro.module.scss';
import rocketSvg from '../../public/images/Rocket.svg';

// At the moment all images must be from the images.unsplash.com domain since only that is whitelisted
export interface IntroWidgetProps {
  introText?: string;
  imageUrl?: string;
}

const Intro = ({
  introText = 'Welcome to my widget',
  imageUrl,
}: IntroWidgetProps) => {
  return (
    <div data-testid="intro" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          alt="introduction"
          layout="fill"
          src={imageUrl ? imageUrl : rocketSvg}
          objectFit="contain"
          objectPosition="center"
          quality={100}
        />
      </div>
      <h1 className="align-center heading-3 margin-top-2">{introText}</h1>
    </div>
  );
};

export default Intro;
