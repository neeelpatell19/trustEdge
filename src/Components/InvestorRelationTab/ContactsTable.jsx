import React from 'react';
import './ContactsTable.css';
import { AiOutlineGlobal } from "react-icons/ai";
import { LiaPhoneSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";

const ContactsTable = () => {
  return (
    <div className="contacts-table-container">
      <h3>Investor Relations Contacts</h3>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Registrar & Transfer Agent</th>
            <th>Compliance Officer</th>
            <th>Nodal Officer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Registrar & Transfer Agent">
              <p><strong className='txt'>Bigshare Services Private Limited</strong></p>
              <p className='xt'>A-802, Samudra Complex,<br/>
              Near Klassic Gold, Girish Cold Drink, Off C.G. Road,<br/>
              Navrangpura, Gujarat,<br/>
              Ahmedabad – 380009</p>
              <p className='xt'><strong>Contact Person:</strong> Mehul Patel</p>
              <p className='xt'><LiaPhoneSolid /> 079 40024135</p>
              <p className='xt'><MdOutlineMail /> <a className='xvg' href="mailto:bssahd@bigshareonline.com">bssahd@bigshareonline.com</a></p>
              <p className='xt'><AiOutlineGlobal /> <a href="https://www.bigshareonline.com" target="_blank" rel="noopener noreferrer">www.bigshareonline.com</a></p>
            </td>
            <td data-label="Compliance Officer">
              <p>Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances</p>
              <p className='xt'><strong>Contact Person:</strong> Ms. Pinkal Mehta</p>
              <p className='xt'>Office No. 308, 3rd Floor, Block-B, Navratna Corporate Park,<br/>
              Bodakdev, Ahmedabad – 380058</p>
              <p className='xt'><LiaPhoneSolid /> 6351738619</p>
              <p className='xt'><MdOutlineMail /> <a className='xvg' href="mailto:cs@trustedgecapital.in">cs@trustedgecapital.in</a></p>
            </td>
            <td data-label="Nodal Officer">
              <p>Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances</p>
              <p className='xt'><strong>Contact Person:</strong> Ms. Pinkal Mehta</p>
              <p className='xt'>Office No. 308, 3rd Floor, Block-B, Navratna Corporate Park,<br/>
              Bodakdev, Ahmedabad – 380058</p>
              <p className='xt'><LiaPhoneSolid /> 6351738619</p>
              <p className='xt'><MdOutlineMail /> <a className='xvg' href="mailto:cs@trustedgecapital.in">cs@trustedgecapital.in</a></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;