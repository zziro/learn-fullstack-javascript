import React from 'react';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
        {message}
    </h2>
  );
};

Header.propTypes = {
  meassage: React.PropTypes.string
};

export default Header;
