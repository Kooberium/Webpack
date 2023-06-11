import React from 'react'

import styles from './app.module.css'


const App = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Webpack test</h1>
        <p className={styles.description}>Example Project</p>
        <div className={styles.circle_wrapper}>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
        </div>
    </div>
  )
}

export default App
