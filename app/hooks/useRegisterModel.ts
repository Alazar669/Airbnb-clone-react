import {create} from 'zustand'

interface useRegisterModelProps {
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
}

const useRegisterModel = create<useRegisterModelProps>((set)=> ({
    isOpen: false,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=> set({isOpen: false})
}));

export default useRegisterModel;