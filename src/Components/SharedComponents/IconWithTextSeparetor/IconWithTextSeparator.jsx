import React from 'react';
import IconSeparetor from '../IconSeparetor/IconSeparetor';

var mobileSmall = window.matchMedia("(min-width: 360px)");
//var mobileMedium = window.matchMedia("(min-width: 375px)");
var mobileBig = window.matchMedia("(min-width: 720px)");
//var tablet = window.matchMedia("(min-width: 1140px)");
//var notebook = window.matchMedia("(min-width: 1366px)");
//var pc = window.matchMedia("(min-width: 1920px)");


function Separator() {
var amount =0;
if (mobileSmall.matches){
    amount =1;
}
if (mobileBig.matches){
    amount =2;
}

return (
    <div className='separetor'>
    <IconSeparetor amount={amount}/>
    <h2>TUTORIALES</h2>
    <IconSeparetor amount={amount} />
  </div>
  );
}
export default Separator;