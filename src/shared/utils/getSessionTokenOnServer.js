import { parse } from 'cookie';

// Retrieves the sessions token from the server context

export const getSessionTokenOnServer = async (context) => {
  const cookies = await parse(context.req?.headers.cookie || '');
  const sessionToken = cookies?.sessionToken || '';

  return sessionToken;
};
