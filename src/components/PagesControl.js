import React, { Component } from "react";
import { connect } from "react-redux";
import pagesActions from "../actions/Pages";
import { bindActionCreators } from "redux";

class PagesControl extends Component {
  constructor(props) {
    super(props);
    const { pagesActions } = this.props;
  }

  render() {
    const { numPages, pageIndex, pagesActions } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
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
        <div>
          Page: {pageIndex + 1} / {numPages}
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesControl);
