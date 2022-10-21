import { ModalBackground, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';
export default function Modal({ Url, onClick }) {
  return (
    <ModalBackground onClick={onClick}>
      <ModalContent>
        <img src={Url} alt="picturee" />
      </ModalContent>
    </ModalBackground>
  );
}
Modal.propTypes = {
  Url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
