import React from 'react';
import styles from './styles/skills.module.css';
import Link from 'gatsby-link';

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Developed Skills </h1>
      <div className={styles.skillsList} >
      </div>
    </div>
  )
}

export default Skills;