import { useEffect } from 'react';
import Link from './link';

function Header() {

  useEffect(() => {
    document.title = window.Config.SiteName;
  }, []);

  return (
    <div id='header'>
      <div className='title'>
      <h1>Status</h1>
      </div>
    </div>
  );
}

export default Header;
