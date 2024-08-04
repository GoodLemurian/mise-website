import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'わたしたちの広島3年,4年',
    Svg: require('@site/static/img/watashitatchi-logo.svg').default,
    description: (
      <>
        昭和32年（1957）に前身の『生産県をめざすわが郷土広島県』が創刊されました。現在は、広島市の小学校3・4年生の郷土史学習のための「社会科副読本」として採択されています。
      </>
    ),
    link: './goods#わたしたちの広島',
  },
  {
    title: '広島市地図',
    Svg: require('@site/static/img/citymap.svg').default,
    description: (
      <>
        『わたしたちの広島3年,4年』の内容に合わせて編集した広島市の地図です。多くの小学校でご利用いただいております。
      </>
    ),
    link: './goods#広島市地図',
  },
  {
    title: '広島県地図',
    Svg: require('@site/static/img/prefmap.svg').default,
    description: (
      <>
        『わたしたちの広島3年,4年』の内容に合わせて編集した広島県の地図です。多くの小学校でご利用いただいております。
      </>
    ),
    link: './goods#広島県地図',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} className={styles.featureLink}>
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link} className={styles.featureLink}>
          <Heading as="h3">{title}</Heading>
        </a>
        <p>{description}</p>
       </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
