import { Button } from './Button.styled';
import PropTypes from 'prop-types';
export default function ButtonEl({ text, func }) {
  return <Button onClick={func}>{text}</Button>;
}

ButtonEl.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
