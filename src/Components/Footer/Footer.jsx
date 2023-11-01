import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>The Premium  Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span>All Rights Copyright -The Premium Resort Maha Nagar Bareilly,Utter Pradesh,India
       <div className="div1"style={{marginLeft:"0px"}}>
        Contact No: +917906626698
        Fax-No:XXXXXXX
        Email Address:<Link>gaur0423@gmail.com</Link>
       </div>
        
      </p>
    </footer>
  );
}
