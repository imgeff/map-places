import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from './index';

function GlobalProvider({ children }) {
  const [places, setPlaces] = useState([]);

  const contextValue = useMemo(() => ({
    map: {
      places,
      setPlaces,
    },
  }), []);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
