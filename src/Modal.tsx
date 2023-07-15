import React, { useState, ChangeEvent } from "react";

interface ModalProps {
    onClose: () => void;
    onAddFriend: (friendName: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onAddFriend }) => {
    const [friendName, setFriendName] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFriendName(event.target.value);
    };

    const handleAddFriend = () => {
        onAddFriend(friendName);
        setFriendName("");
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <input
                    type="text"
                    placeholder="Digite o user do amigo"
                    value={friendName}
                    onChange={handleInputChange}
                />
                <button className="ml-2" onClick={handleAddFriend}>
                    Adicionar
                </button>
            </div>
        </div>
    );
};

export default Modal;
