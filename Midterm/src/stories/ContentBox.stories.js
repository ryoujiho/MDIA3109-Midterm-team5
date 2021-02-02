import React from 'react';
import ContentBox from '../comps/ContentBox';
import test from 'test.jpg'
import test2 from 'test2.jpg'

export default {
  title: 'ContentBox',
  component: ContentBox,
};

export const DefaultContentBox = () => <ContentBox />
export const TestContentBox = () => <ContentBox img={test} title="Revenant" director="Alejandro González Iñárritu" year="2015"/>
export const Test2ContentBox = () => <ContentBox img={test2} title="Blade Runner 2049" director="Denis Villeneuve" year="2017"/>
