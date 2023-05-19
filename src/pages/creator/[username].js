import { getFreelancerProfileApi } from '@/shared/services/getFreelancerProfileApi';

export default function SellerProfile({ data }) {
  return <div>Creator: {data.name}</div>;
}

// TODO: Add the freelaner fetch logic and add error handling
export async function getServerSideProps(context) {
  const { username } = context.params;

  const response = await getFreelancerProfileApi(username);

  return { props: { data: response } };
}
