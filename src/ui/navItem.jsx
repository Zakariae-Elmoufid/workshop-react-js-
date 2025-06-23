import react from 'react';
import { Link } from 'react-router-dom';




function navItem({icon , children , link , className="" }){
   const isActive =   window.location.pathname == link ;
   const activeClass  = isActive ? "bg-blue-100 border-main" : "";

    return (
      <li className={`px-6 py-4 border-r-4 ${activeClass}` }>
        <Link to={link}>
            {icon} {children}
        </Link>
      </li>
    );
}

export default navItem;