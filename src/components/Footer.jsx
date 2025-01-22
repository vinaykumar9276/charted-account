import React from 'react';

const Footer = () => {
  return (
    <div className=" py-6">
      

        {/* Footer Text */}
        <div className="text-center mt-6 shadow p-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Chartered Accountants Finder. All rights reserved.</p>
        </div>
      </div>
  );
};

export default Footer;