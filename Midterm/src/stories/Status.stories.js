import React from 'react';
import Status from '../comps/Status';

export default {
  title: 'Status',
  component: Status,
};


export const DefaultStatus = () => <Status />
export const WatchingStatusSelected = () => <Status text="Watching" border="3px black solid" bg="watching"/>
export const WatchingStatus = () => <Status text="Watching" bg="watching"/>
export const WatchedStatus = () => <Status text="Watched" bg="watched"/>
export const WaitingStatus = () => <Status text="Waiting" bg="waiting"/>
export const StoppedStatus = () => <Status text="Stopped" bg="stopped"/>
