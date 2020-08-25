import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './styles.css';

function ScrollArrow() {
  return (
    <div className="scroll-down">
      <div className="arrow-content">
        <span>Role para baixo</span>
        <KeyboardArrowDownIcon className="arrow-down" />
      </div>
    </div>
  );
}

export default ScrollArrow;
