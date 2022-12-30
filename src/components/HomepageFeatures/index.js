import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '兼容上游',
    imgSrc: 'img/draw_upstream_compatible.png',
    description: (
      <>
        完全兼容Apache Ambari, 不对其进行二次开发, 用户可无障碍互相切换
      </>
    ),
  },
  {
    title: '方便部署',
    imgSrc: 'img/draw_easy_deploy.png',
    description: (
      <>
        提供了生成好的RPM包及镜像站, 用户只需下载安装即可使用, 无需从源码进行打包
      </>
    ),
  },
  {
    title: '多云支持',
    imgSrc: 'img/draw_multi_cloud_support.png',
    description: (
      <>
        支持一键将Apache Ambari部署在云上, 用户搭建环境及使用更加方便
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
