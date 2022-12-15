import React from "react";
import "./css/modal.css";


const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
    const keydownHandler = ({ key }) => {
      switch (key) {
        case 'Escape':
          onClose();
          break;
        default:
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('keydown', keydownHandler);
      return () => document.removeEventListener('keydown', keydownHandler);
    });
  
    return !isVisible ? null : (
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-header"> Заполните форму
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="name_city">
                <input type="text" className="name" placeholder="Ваше имя"/>
                <input type="text" className="city" placeholder="Город"/>
            </div>
            <div className="email_price">
                <input type="text" className="email" placeholder="Ваш email"/>
                <input type="text" className="bank" placeholder="Бюджет"/>
            </div>
            <div className="your_dreams">
                <textarea></textarea>
            </div>
        </div>
      </div>
    );
  };

export default Modal;