import countriesLightData from '../../../data/countriesLight.json';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
  } else {
    try {
      res.status(200).json(countriesLightData);
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.status(404).json({ message: 'File Not Found' });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }
}
