import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Faq = () => {
  // Step 1: Create state to manage the height of the white div
  const [expanded, setExpanded] = useState(false);

  // Step 2: Define a function to toggle the height on button click
  const handleToggleHeight = () => {
    setExpanded(!expanded);
  };

  // Step 3: Set the height dynamically based on the state
  const whiteDivHeight = expanded ? '14rem' : '4rem';

  return (
    <div style={{ minHeight: '74vh', width: '100%' }} className='w-full px-16 flex flex-col justify-center items-center bg-primary'>
      {/* Step 4: Apply dynamic height to the white div */}
      <div style={{ width: '100%', backgroundColor: '#fff', borderRadius: '7px'}} >
        {/* Step 6: The interrogation room */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
          {/* Step 7: Unveiling the question */}
          <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#633A93', height: '3.5rem', width: '3px' }}></div>
            <p style={{ marginLeft: '10px', fontWeight: 'bolder' }}>HOW DO I DELETE MY HURRI ACCOUNT</p>
          </div>
          {/* Step 8: The cliffhanger button */}
          <div style={{ backgroundColor: '#eaeaea', padding: '7px', marginRight: '5px', borderRadius: '5px', cursor: 'pointer' }} onClick={handleToggleHeight}>
            {expanded ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
        </div>
        
        {expanded ? <div style={{ borderTop: '1px solid #EAEAEA', padding: '15px', marginTop: '0.6rem' }}>
          <p>-Go to My Profile page</p>
          <p>-Click on the “Delete My Account” button</p>
          <p>-Follow the prompt</p>
          <p className='mt-2 font-bold'>Your request will be received and your account, Deleted.</p>
        </div> : null
        }
      </div>
    </div>
  );
}

export default Faq;
