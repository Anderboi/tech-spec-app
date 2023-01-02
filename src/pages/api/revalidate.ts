// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({message: 'Invalid token'})
  }

  try {
    //Regenerate index route showing projects
    await res.revalidate('/') //! may by an error
    return res.json({revalidate: true})
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
