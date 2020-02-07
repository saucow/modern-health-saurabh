import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import pagesActions from "../actions/Pages";
import { bindActionCreators } from "redux";

class PagesControl extends Component {
  render() {
    const { numPages, pageIndex, pagesActions } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid lightgray",
          marginTop: "20px"
        }}
      >
        <button
          disabled={!(pageIndex > 0)}
          onClick={() => {
            pagesActions.previousPage();
          }}
        >
          Previous Page
        </button>
        <h5>
          Page: {pageIndex + 1} of {numPages}
        </h5>
        <button
          disabled={!(pageIndex + 1 < numPages)}
          onClick={() => {
            pagesActions.nextPage();
          }}
        >
          Next Page
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pageIndex: state.pagesReducer.pages.pageIndex
});
const mapDispatchToProps = dispatch => ({
  pagesActions: bindActionCreators(pagesActions, dispatch)
});

PagesControl.propTypes = {
  numPages: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesControl);
