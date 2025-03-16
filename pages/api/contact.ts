import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method === 'POST') {
        res.status(200).json(req.body);
        console.log(req.body);
        const folder = await fs.promises.readdir('contactdata');
        console.log(folder);
        await fs.promises.writeFile(
            `contactdata/${folder.length + 1}.json`,
            JSON.stringify(req.body)
        );
    } else {
        res.status(200).json(['GET Request']);
    }
}
