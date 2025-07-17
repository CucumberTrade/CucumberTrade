import type { ReactNode, ReactElement } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBackground)}>
      <div className="container text--center">
        <Heading as="h1" className="hero__title margin-bottom--lg">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'margin-top--xl')}>
          <Link className="button button--secondary button--lg" to="/docs/Home">
            Enter Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={''}
      description="CucumberTrade is the leading AI-powered trading platform—learn more in our docs."
    >
      <HomepageHeader />
    </Layout>
  );
}