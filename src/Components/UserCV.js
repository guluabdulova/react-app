import React from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Contacts from './Contacts';
import '../Css/usercv.css'

const UserCV=()=>{
  return (
    <div>
      <PersonalInfo />
      <Experience />
      <Contacts /> </div> );
};
export default UserCV;
