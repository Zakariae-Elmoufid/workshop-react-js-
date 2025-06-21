import react from 'react';



console.log(window.location.href);
function navItem({icon , children , link , className="" }){
    return (
      <li className="px-6 py-4 bg-blue-100 border-r-4 border-main"  >
        <a href={link}>
            {icon} {children}
        </a>
      </li>
    );
}

export default navItem;