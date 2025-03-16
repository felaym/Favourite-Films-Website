import React from 'react';

import styles from '../styles/about.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Hi, I&apos;m Artem 👋</h1>
          <div className={styles.divider}></div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>About Me</h3>
              <p>
                A seasoned cinephile with a passion for exploring all corners of
                cinema, from arthouse masterpieces to mainstream blockbusters. I
                appreciate films that challenge conventions, evoke deep emotions,
                and leave a lasting impact.
              </p>
            </div>

            <div className={styles.card}>
              <h3>My Approach</h3>
              <p>
                I evaluate movies based on a blend of plot originality, directorial
                vision, and emotional impact. A compelling film should offer a fresh
                narrative, strong character arcs, and immersive storytelling. I pay
                close attention to cinematography, editing, and sound design, as they
                shape the film&apos;s atmosphere.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Why You Can Trust This?</h3>
              <ul className={styles.list}>
                <li>🎬 Watch 150+ movies annually</li>
                <li>📽 Have a specialized education in the film industry</li>
                <li>⚖️ Unbiased towards the cast</li>
                <li>🎞 Passionate about analyzing cinematography and storytelling</li>
                <li>🖋 Writes detailed reviews and critiques of films</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
