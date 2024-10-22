import React from 'react';

// Define the Title component as a functional component
// to explicitly define it using typescript
// The Title component displays the title and subtitle of the app

const Title: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className="text-5xl text-cyan-900 tracking-wide">RICHYVEST</p>
      <p className="text-2xl text-cyan-400 mt-3 tracking-wide">How rich could you be?</p>
    </div>
  );
}

export default Title;