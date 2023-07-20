import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '记录美好瞬间',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        您将能够找到关于作者的日常生活经历和感悟。分享一些有趣的故事、难忘的回忆以及平凡中的特别时刻。通过这些轻松的日常话题，邀请读者一起感受生活的美好。
      </>
    ),
  },
  {
    title: '工作难题解答',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        针对日常工作中可能遇到的困难或问题，作者将结合自己的经验，分享一些实用的解决方案或建议。这些内容旨在帮助提升工作效率和解决问题的能力。
      </>
    ),
  },
  {
    title: '追求创新思维',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        您将看到作者关于解决问题的各种思路和方法的探讨。重点关注创新性和实用性，对不同情况下的解决方案进行比较和分析，旨在培养读者的创新思维和独立解决问题的能力。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
