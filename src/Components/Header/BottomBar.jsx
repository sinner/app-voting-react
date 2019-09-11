/*eslint-disable*/
import React, { Fragment } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../assets/jss/material-kit-react/components/headerStyle";

const useStyles = makeStyles(styles);

export default function BottomBar(props) {
  const classes = useStyles();
  const { expiresIn } = props;
  return (
    <Fragment>
        <div className="bar-item description">
          <span className="text">Closing In</span>
        </div>
        <div className="bar-item expires-in">
          <span className="text">{expiresIn}</span>
        </div>
    </Fragment>
  );
}
