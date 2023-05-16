// import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { userActions } from '@/state/user/userReducer';

// import { ROLES } from '../constants/roles';

export function InitUserStateProvider({ initialState }) {
  // const router = useRouter();
  const dispatch = useDispatch();

  if (initialState.length === 0) return <></>;

  // const { CLIENT, FREELANCER } = ROLES;
  // const role = initialState?.role;

  dispatch(userActions.setUser(initialState));

  // if (role === CLIENT) router.push(''); // Push to client marketplace
  // if (role === FREELANCER) router.push(''); // Push to client marketplace

  return <></>;
}
