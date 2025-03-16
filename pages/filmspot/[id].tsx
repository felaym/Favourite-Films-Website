import * as fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';

interface Film {
    title: string;
    content: string;
    mark: string;
}

interface PostProps {
    myFilms: Film;
}

const Post: React.FC<PostProps> = (props) => {
    const [film] = useState<Film>(props.myFilms);
    return (
        <div className= 'text-center w-75 mx-auto' >
            <h1>{ film && film.title }</h1>
            < hr />
            <p>{ film && film.content}</p>
            < small > <i>{ film && film.mark}</i></small >
        </div>
    );
}

// Static Site Generations
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'fight-club' } },
            { params: { id: 'fury' } },
            { params: { id: 'inglourious-basterds' } },
            { params: { id: 'meet-joe-black' } },
            { params: { id: 'moneyball' } },
            { params: { id: 'mr-mrs-smith' } },
            { params: { id: 'oceans-eleven' } },
            { params: { id: 'oceans-thirteen' } },
            { params: { id: 'oceans-twelve' } },
            { params: { id: 'seven-years-in-tibet' } },
            { params: { id: 'seven' } },
            { params: { id: 'sleepers' } },
            { params: { id: 'troy' } },
            { params: { id: 'twelve-monkeys' } },
            { params: { id: 'brothers' } },
            { params: { id: 'everest' } },
            { params: { id: 'gone-girl' } },
            { params: { id: 'jarhead' } },
            { params: { id: 'nightcrawler' } },
            { params: { id: 'prisoners' } },
            { params: { id: 'source-code' } },
            { params: { id: 'the-curious-case-of-benjamin-button' } },
            { params: { id: 'the-guilty' } }
        ],
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
    const { id } = context.params as { id: string };
    const myFilms = await fs.promises.readFile(`filmdata/${id}.json`, 'utf-8');

    return {
        props: { myFilms: JSON.parse(myFilms) },
    };
}

// Server Side Rendering
// export async function getServerSideProps(context) {
//     const data = await axios.get(`http://localhost:3000/api/getFilmslug=${context.query.id}`)
//     const myFilms = data.data
//
//     return {
//         props: { myFilms },
//     }
// }

export default Post;
