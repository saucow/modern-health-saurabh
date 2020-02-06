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
          display: "flex"
        }}
      >
        {pageIndex > 0 ? (
          <div
            onClick={() => {
              pagesActions.previousPage();
            }}
          >
            Previous
          </div>
        ) : null}
        <div>
          Page: {pageIndex + 1} / {numPages}
        </div>
        {pageIndex + 1 < numPages ? (
          <div
            onClick={() => {
              pagesActions.nextPage();
            }}
          >
            Next
          </div>
        ) : null}
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
