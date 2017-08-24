import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNotesRequest } from '../actions/notes/getNotesActions';
import NotesList from '../components/NotesList';

class NotesIndex extends Component {
  componentWillMount() {
    this.props.getNotesRequest();
    // .then loading animation or sth...
  }

  render() {
    return <NotesList notes={this.props.notes} />;
  }
}

NotesIndex.defaultProps = {
  notes: null,
};

NotesIndex.propTypes = {
  getNotesRequest: PropTypes.func.isRequired,
  notes: PropTypes.objectOf(PropTypes.object),
};

function mapStateToProps(state) {
  return { notes: state.notesReducer };
}

export default connect(mapStateToProps, { getNotesRequest })(NotesIndex);
