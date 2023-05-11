import { TimeFetchAPI } from '@/config/api/TimeFetchAPI';

// Fetch current time and timezone information for a specific location

export const getTimeData = async (location) => {
  const path = `/timezone/${location}`;

  try {
    const response = await TimeFetchAPI.get(path);
    const data = await response.data();

    return data;
  } catch (error) {
    throw new Error('Error retrieving time data');
  }
};
