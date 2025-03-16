import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
): void {
    const slug = req.query.slug as string;
    fs.readFile(`filmdata/${slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'No Film Found' });
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
}
