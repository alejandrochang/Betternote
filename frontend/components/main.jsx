import React from 'react';
import {Route} from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import Modal from './modal/modal';
import SidebarContainer from './sidebar/sidebar_container';

export default () => (
  <div>
    <Modal />
    <SidebarContainer />
  </div>
);
