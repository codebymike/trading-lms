import type { APIError, State } from "~/types";

const state = reactive<State>({
    isLoading: false,
    apiError: null,
    isConfirmModalVisible: false,
})

export default () => {
    const { isLoading, apiError, isConfirmModalVisible } = toRefs(state);
    const toast = useToast();
    
    const toggleLoading = (value: boolean) => {
        state.isLoading = value;
    }
    const toggleConfirmModal = (value: boolean) => {
        state.isConfirmModalVisible = value;
    }
    const setApiError = (error: APIError | null) => {
        state.apiError = error;
    }
    const showMessage = ( content: { title: string, description?: string } ) => {
        toast.add({
            title: content.title,
            description: content.description,
            color: 'primary',
        })
    }
    const showError = ( error: APIError ) => {
        toast.add({
            title: error.statusMessage,
            description: error.message,
            color: 'error',
        })
    }
}