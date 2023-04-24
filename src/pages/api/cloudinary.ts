import type { NextApiRequest, NextApiResponse } from 'next';
import { getCloudinaryImageUrl, Options } from '@/utils/cloudinary';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const publicId = req.query.publicId as string;
  let options: Options = {};

  const imageUrl = getCloudinaryImageUrl(publicId, options);

  res.status(200).json({ imageUrl });
}