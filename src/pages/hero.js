import React from 'react';
import styles from './styles/hero.module.css';

var Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.heroImgTop} src='/images/mech_engineer.jpg' alt="engineering" />
      <img className={`${styles.heroImg}`} src='/images/dev-typing.jpg' alt="computer" />
      <div className={styles.heroTitle}>
        <h1 className={styles.headingPrimary}>Brady Sutton</h1>
        <h3 className={styles.headingSecondary}>
          <span className={styles.fadeIn}> Former Mechanical engineer</span>
          ...
          <span className={styles.fadeOut}> turned software developer </span>
        </h3>
      </div>
    </div>
  )
}

export default Hero;