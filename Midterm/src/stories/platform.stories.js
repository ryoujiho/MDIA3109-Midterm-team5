import React from 'react';
import Platform from '../comps/Platform';

export default {
  title: 'Platform',
  component: Platform,
};

export const DefaultPlatform = () => <Platform />
export const NetflixSelected = () => <Platform border="3px solid black" text="Netflix" bg="netflix" color="black"/>
export const Netflix = () => <Platform text="Netflix" bg="netflix" color="black"/>
export const DisneyPlus= () => <Platform text="Disney +" bg="disney"/>
export const AmazonPrime= () => <Platform text="Amazon" bg="amazon" color="black"/>
export const YouTube= () => <Platform text="YouTube" bg="youtube"/>
export const Hulu= () => <Platform text="Hulu" bg="hulu" color="black"/>
export const AppleTV= () => <Platform text="Apple TV" bg="apple"/>