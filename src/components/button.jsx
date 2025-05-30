import React from "react";




function Button({children, onClick, className = ''  ,type}){
    return (
      <button onClick={onClick}
       className={className} type={type}
      >
               {children}

      </button>
    );
}

export default Button;
