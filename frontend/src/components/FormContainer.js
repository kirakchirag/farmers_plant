import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 col-xs-12">{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
