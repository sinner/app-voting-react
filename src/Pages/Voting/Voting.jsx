/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import moment from 'moment';
// react components for routing our app without refresh
// import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Parallax from '../../Components/Parallax/Parallax';
// sections for this page
import HeaderLinks from '../../Components/Header/HeaderLinks';
import SectionExamples from './Sections/SectionExamples';

import styles from '../../assets/jss/material-kit-react/views/components';
import './Voting.scss';

import headerImage from '../../assets/img/page/image1.jpg';
import BottomBar from '../../Components/Header/BottomBar';
import MainVoteCard from '../../Components/MainVoteCard/MainVoteCard';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function Voting(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const expiresIn = moment('2019-10-01').fromNow(true);
  return (
    <div className="voting-component">
      <Header
        brand="Rule of Thumb."
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax className="paralax-voting" image={headerImage}>
        <div className="paralax-overlay" />
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <div className="main-vote-container">
                  <MainVoteCard />
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="paralax-bottom-bar">
          <BottomBar expiresIn={expiresIn} />
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionExamples />
      </div>
      <Footer />
    </div>
  );
}
