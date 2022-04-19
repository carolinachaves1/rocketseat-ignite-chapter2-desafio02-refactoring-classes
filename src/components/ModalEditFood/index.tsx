import { Form } from '@unform/web';
import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FoodData, FoodInput } from '../Food/types';
import { Input } from '../Input';
import { Modal } from '../Modal';

interface ModalEditFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    editingFood: FoodData;
    handleUpdateFood: (food: FoodInput) => Promise<void>
}

export function ModalEditFood({ 
    isOpen, 
    setIsOpen, 
    editingFood,
    handleUpdateFood, } : ModalEditFoodProps){
    const formRef = useRef(null);

    async function handleSubmit(food: FoodData) {
        handleUpdateFood(food);
        setIsOpen();
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Editar Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" />

                <Input name="name" placeholder="Ex: Moda Italiana" />
                <Input name="price" placeholder="Ex: 19.90" />

                <Input name="description" placeholder="Descrição" />
                <button type="submit" data-testid="add-food-button">
                <p className="text">Editar Prato</p>
                <div className="icon">
                    <FiCheckSquare size={24} />
                </div>
                </button>
            </Form>
        </Modal>
    )
}