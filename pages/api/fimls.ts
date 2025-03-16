import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    const allFimls: any[] = [];

    const filmDir = await fs.promises.readdir('filmdata', 'utf-8');
    for (let index = 0; index < filmDir.length; index++) {
        const element = await fs.promises.readFile('filmdata/' + filmDir[index], 'utf-8');
        allFimls.push(JSON.parse(element));
    }
    res.status(200).json(allFimls);
}
