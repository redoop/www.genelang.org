import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Upstream Compatibility',
    imgSrc: 'img/draw_upstream_compatible.png',
    description: (
      <>
        Fully compatible with Apache Ambari + Bigtop, with secondary development code contributed to the Apache community. Users can seamlessly switch between them.
      </>
    ),
  },
  {
    title: 'Easy Deployment',
    imgSrc: 'img/draw_easy_deploy.png',
    description: (
      <>
        Provides pre-built Apache Bigtop RPM installation packages and mirror sites, allowing users to simply download and install without the need for source code compilation.
      </>
    ),
  },
  {
    title: 'Multi-Cloud Support',
    imgSrc: 'img/draw_multi_cloud_support.png',
    description: (
      <>
        Supports one-click deployment of Apache Ambari on the cloud, making it more convenient for users to set up environments and use.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgSrc} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
