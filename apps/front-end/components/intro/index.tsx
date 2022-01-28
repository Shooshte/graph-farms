import Image from 'next/image';
import styles from './intro.module.scss';
import rocketSvg from '../../public/images/Rocket.svg';

interface WidgetProps {
  introText?: string;
  imageUrl?: string;
}
// changes intro text
// changes hero image URL
const Intro = ({
  introText = 'Welcome to my widget',
  imageUrl = rocketSvg,
}: WidgetProps) => (
  <div className={styles.container}>
    <Image alt="introduction" height={292} width={197} src={imageUrl} />
    <h1 className="align-center heading-3 margin-top-3">{introText}</h1>
  </div>
);

export default Intro;
