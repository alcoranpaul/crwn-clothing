/*
 * File: home.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 8:14:15 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 26th May 2023 4:00:50 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the home page
 */

import { Outlet } from 'react-router-dom'; // Outlet is a component that renders the child route's component
import Directory from '../../components/directory/directory.component';

/** Home Page
 *
 * @returns Home page
 */
function Home() {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
