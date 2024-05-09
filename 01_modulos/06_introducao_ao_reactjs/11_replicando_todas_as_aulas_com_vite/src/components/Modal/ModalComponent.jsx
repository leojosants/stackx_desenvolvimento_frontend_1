import './modal.css';

const Modal = (props) => {
    const { onClose, children, isOpen } = props;

    if (!isOpen) {
        return null;
    }

    return (
        <div className={'c-modal-background'}>
            <div className={'c-modal-content'}>
                <span className={'c-close'} onClick={onClose}>
                    Fechar
                </span>

                {children}
            </div>
        </div>
    );
};

export default Modal;