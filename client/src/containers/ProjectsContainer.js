import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { currentUserSelector, projectsForCurrentUserSelector } from '../selectors';
import { openProjectAddModal } from '../actions/entry';
import Projects from '../components/Projects';

const mapStateToProps = (state) => {
  const { isAdmin } = currentUserSelector(state);
  const projects = projectsForCurrentUserSelector(state);

  return {
    items: projects,
    isEditable: isAdmin,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onAdd: openProjectAddModal,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
