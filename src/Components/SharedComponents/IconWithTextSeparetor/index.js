import React from 'react';
import IconSeparetor from '../IconSeparetor/IconSeparetor';
import iconAmount from '../IconSeparetor/IconCounter';

function Separator({text}) {
    var  amount = iconAmount().amountText;
return (
    <div className='separetor'>
    <IconSeparetor amount={amount}/>
    <h2>{text}</h2>
    <IconSeparetor amount={amount}/>
  </div>
  );
}
export default Separator;