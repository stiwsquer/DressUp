import React from 'react';
import { HomeIntro } from './Home.style';
// import { refreshTokenAndFetch } from '../../context/LoginContext';

import HomeDescription from '../HomeDescription/HomeDescription';
import HomeGallery from '../HomeGallery/HomeGallery';
import HomeProducts from '../HomeProducts/HomeProducts';
// import Button from '../Button/Button';

// eslint-disable-next-line arrow-body-style
export default React.memo(() => {
  // const [name, setName] = useState('');

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let res = await refreshTokenAndFetch('http://localhost:3001/user', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         credentials: 'include',
  //       });

  //       res = await res.json();
  //       setName(res.map((user) => user.email));
  //       console.log(...res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     let res = await refreshTokenAndFetch('http://localhost:3001/user', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //     });

  //     res = await res.json();
  //     console.log(res);
  //     setName(JSON.stringify(res.filter((user) => user.email.length < 4)));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {/* <h1>{name ? `Hi ${name}` : 'You are not logged in'}</h1>
      <Button onClick={fetchData}>Fetch Data</Button> */}
      <HomeIntro />
      <HomeDescription />
      <HomeGallery />
      <HomeProducts />
    </>
  );
});
