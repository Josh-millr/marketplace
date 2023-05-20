// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { connect } from 'react-redux';

// export function FreelancerLocation({ user }) {
//   const [checkingLocation, setCheckingLocation] = useState(false);
//   const router = useRouter();

//   const checkLocationValidity = async () => {
//     try {
//       setCheckingLocation(true);

//       const isLocationExist = await checkLocationExistenceApi(value);

//       if (isLocationExist === false) {
//         setIsLocationValid(true);
//         router.push('./freelancer/register');
//       } else if (isLocationExist) {
//         form.setFieldError('Location', LocationTaken.statement);
//       }
//     } catch (error) {
//       notificationFactory(error);
//     } finally {
//       setCheckingLocation(false);
//     }
//   };

//   useEffect(() => {
//     checkLocationValidity();
//   }, []);

//   return <div></div>;
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.user, // Assuming you have a 'user' object in your Redux store
//   };
// };

// export default connect(mapStateToProps)(FreelanceForm);

export function FreelancerLocation() {
  return <div>Location</div>;
}
