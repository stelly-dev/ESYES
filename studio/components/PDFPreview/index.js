import React from "react";
// import PDFViewer from "pdf-viewer-reactjs";
import { Document, Page } from "react-pdf";

const resolveSanityPDFLink = props => {
  const id = props.document.published.file.asset._ref.split("-")[1];
  const studioDataSet = "production";
  const secret = "p5afbb4a";
  return `https://cdn.sanity.io/files/${secret}/${studioDataSet}/${id}.pdf`;
};

class PDFPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    };
    this.onPressPageNext = this.onPressPageNext.bind(this);
    this.onPressPagePrev = this.onPressPagePrev.bind(this);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onPressPageNext() {
    const { numPages, pageNumber } = this.state;
    if (numPages == pageNumber) {
      this.setState({
        pageNumber: 1
      });
    } else {
      this.setState(prevState => ({
        pageNumber: prevState.pageNumber + 1
      }));
    }
  }

  onPressPagePrev() {
    const { pageNumber } = this.state;
    if (pageNumber == 1) {
      this.setState(prevState => ({
        pageNumber: prevState.numPages
      }));
    } else {
      this.setState(prevState => ({
        pageNumber: prevState.pageNumber - 1
      }));
    }
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Document
          file={resolveSanityPDFLink(this.props)}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page width="500" pageNumber={pageNumber} />
        </Document>
        <p style={centerTextStyle}>
          Page {pageNumber} of {numPages}
        </p>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={this.onPressPagePrev}>
            {"<"}
          </button>
          <button style={buttonStyle} onClick={this.onPressPageNext}>
            {">"}
          </button>
        </div>
      </div>
    );
  }
}

const centerTextStyle = {
  textAlign: "center"
};

const buttonStyle = {
  width: "20px",
  height: "20px",
  backgroundColor: "hsl(216, 100%, 54%)",
  color: "white",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "5px",
  fontWeight: "800"
};

const buttonContainerStyle = {
  margin: "0 auto",
  display: "flex",
  justifyContent: "center"
};

export default PDFPreview;
