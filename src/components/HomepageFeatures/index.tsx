import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'わたしたちの広島',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        昭和32年（1957）以来、広島市の小学校3・4年生の郷土史学習のための「社会科副読本」として採択されています。
      </>
    ),
  },
  {
    title: '広島市地図・県地図',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        「わたしたちの広島」の内容に合わせて編集した広島市・県の地図です。多くの小学校でご利用いただいております。
      </>
    ),
  },
  {
    title: '国土地理院地形図',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        国土地理院発行の各種地形図の取次販売を行っております。
      </>
    ),
  },
  {
    title: 'その他の取扱商品',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        地図や広島に関する各種書籍をご紹介しております。
      </>
    ),
  },
  {
    title: '通信販売の申込',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        取扱商品はこちらのフォームからご注文いただくことができます。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
