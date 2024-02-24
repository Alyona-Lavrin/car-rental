import PropTypes from "prop-types";
import { ErrorMessage, Section, Btn } from './ErrorDisplay.styled';
import GeneralContainer from 'components/GeneralContainer';

const ErrorDisplay = ({messageError, showButton, onButtonClick, buttonLabel}) => {
  return (
    <Section>
      <GeneralContainer>
        <ErrorMessage>{messageError}</ErrorMessage>
        {showButton && <Btn type="button" onClick={onButtonClick}>{buttonLabel}</Btn>}
      </GeneralContainer>
    </Section>    
  );
}

ErrorDisplay.propTypes = {
  messageError: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
  onButtonClick: PropTypes.func,
  buttonLabel: PropTypes.string,
};

export default ErrorDisplay;


