import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeed from '@site/src/components/HomepageFeed';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://forms.gle/6u5BAaspssEDjGtf8">
            ご注文はこちらから🛒
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`ホーム`}
      description="広島市内小学校社会科副読本『わたしたちの広島3年,4年』並びに児童用「広島市地図」「広島県地図」を取り扱っております。">
      <HomepageHeader />
      <main>
        <HomepageFeed />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
