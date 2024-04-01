

import React from 'react';

const OtherPane = () => {
  // Simulate tab click using useEffect hook (optional for debugging)
  React.useEffect(() => {
    console.log('Other tab clicked!'); // This line can be removed later
  }, []);  // Empty dependency array to run only once on component mount

  return (
    <div className="other-tab">
      <h2>Hello World!</h2>  {/* Display "Hello World!" directly */}
    </div>
  );
};

export default OtherPane;

