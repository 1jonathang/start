import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = 'docs';
    const data = [];
    req.on('data', (chunk) => {
      data.push(chunk);
    });
    req.on('end', async () => {
      const buffer = Buffer.concat(data);
      try {
        await fs.writeFile(`${filePath}/myFile.pdf`, buffer);
        res.status(200).json({ status: 'ok' });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
