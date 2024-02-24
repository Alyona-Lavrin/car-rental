import React from 'react';
import { useNavigate } from 'react-router-dom';

import ErrorDisplay from 'components/ErrorDisplay';

const ErrorPage = () => {
  const navigate = useNavigate();
  const messageError = "page not found";
  const btnErrorLabel = "Go to Home";
  const onClickBtnError = () => navigate('/');

  return (
    <>
      <ErrorDisplay messageError={messageError} showButton={true} onButtonClick={onClickBtnError} buttonLabel={ btnErrorLabel } />
    </>
  )
}

export default ErrorPage;