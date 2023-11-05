import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

function Analytics() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

}

export default Analytics;