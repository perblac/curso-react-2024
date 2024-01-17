// imports
// globals

import Card from "./Card";

const Container = () => {
  // hooks
  // vars
  const header = (
    <div className="card-header">
      Card Header
    </div>
  );
  const body = (
    <div className="card-body">
      <h5>Card Title</h5>
      <p>Card text</p>
    </div>
  );
  const footer = (
    <div className="card-footer">
      Card Footer
    </div>
  );
  // functs
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      Container <br />
      <Card header={header} body={body} footer={footer} />
    </div>
  );
};

export default Container;
