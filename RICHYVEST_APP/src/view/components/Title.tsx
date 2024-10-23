import React from 'react';

// Define the Title component as a functional component
// to explicitly define it using typescript
// The Title component displays the title and subtitle of the app

const Title: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className="text-6xl text-cyan-900 tracking-wide">RICHYVEST</p>
      <p className="text-2xl text-cyan-700 mt-3 tracking-widest font-['Raleway']">How rich could you be?</p>
    </div>
  );
}

export default Title;