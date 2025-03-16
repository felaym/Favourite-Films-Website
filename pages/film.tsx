import * as fs from 'fs';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from '../styles/film.module.css';

interface Film {
  slug: string;
  title: string;
  content: string;
  author: string;
}

interface FilmProps {
  allFilms: Film[];
}

const Film: React.FC<FilmProps> = (props) => {
  const [films] = useState<Film[]>(props.allFilms);

  return (
    <>
      <h1 className={styles.title}>All Films</h1>
      <hr />
      <div className={styles.container}>
        {films.map((item) => (
          <div key={item.slug} className={styles.filmCard}>
            <h3 className={styles.filmTitle}>{item.title}</h3>
            <p className={styles.filmContent}>{item.content.slice(0, 100)}.....</p>
            <small className={styles.filmAuthor}>{item.author}</small>
            <br />
            <Link href={`filmspot/${item.slug}`} legacyBehavior>
              <button className={styles.readMore}>Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps(
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<FilmProps>> {
  const data = await fs.promises.readdir('filmdata');
  const allFilms: Film[] = [];

  for (const fileName of data) {
    const fileContent = await fs.promises.readFile(`filmdata/${fileName}`, 'utf-8');
    allFilms.push(JSON.parse(fileContent));
  }

  return {
    props: { allFilms },
  };
}

// export async function getServerSideProps(context) {
//   const data = await axios.get("http://localhost:3000/api/films")
//   const allFilms = data.data
//   return {
//     props: { allFilms },
//   }
// }
export default Film;
