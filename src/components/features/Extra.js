import React from 'react';
import InViewAnimateTop from '../transitions/InViewAnimateTop';

const Extra = () => {
  return (
    <div className='w-full flex justify-center px-5 md:px-44' >
      <div className='grid grid-cols-1 gap-x-20 gap-y-14' >
        <InViewAnimateTop>
          <div>
            <h2 className='text-primary text-center md:text-left'>Our Vision</h2>
            <p className='text-center md:text-left'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
            officia deserunt mollitia animi, id est laborum et dolorum fuga. 
            Et harum quidem rerum facilis est et expedita distinctio. 
              </p>
          </div>
        </InViewAnimateTop>
      </div>
    </div>
  )
}

export default Extra