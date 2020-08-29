import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './styles.css';

function ScrollArrow() {
  return (
    <div className="scroll-down" data-aos="fade" data-aos-anchor-placement="top-bottom">
      <div className="arrow-content">
        <span>Role para baixo</span>
        <KeyboardArrowDownIcon className="arrow-down" />
      </div>
    </div>
  );
}

export default ScrollArrow;
