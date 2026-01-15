import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent text-gray-400 py-6 px-4">
      <div className="container mx-auto text-center text-sm">
        <p>Copyright © {currentYear} Aum. All Rights Reserved.</p>
        <p className="mt-2">Designed & Built by Aum</p>
      </div>
    </footer>
  );
};

export default Footer;