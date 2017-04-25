// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';
import Props from '../../../utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-services`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'services');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path fill="none" stroke="#000" strokeWidth="2" d="M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Services';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

