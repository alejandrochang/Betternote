import React from 'react';
import {Route} from 'react-router-dom';
import Modal from './modal/modal';
import SidebarContainer from './sidebar/sidebar_container';
import NotesContainer from './notes/notes_from_notebook/notes_container';
import NoteFormContainer from './notes/note_form/note_form_container';

export default () => (
  <div>
    <Modal />
    <SidebarContainer />
    <NotesContainer />
    <NoteFormContainer/>
  </div>
);
