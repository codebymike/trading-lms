import type { APIError, State } from "~/types";

const state = reactive<State>({
    isLoading: false,
    apiError: null,
    isConfirmModalVisible: false,
})

export default () => {
    const { isLoading, apiError, isConfirmModalVisible } = toRefs(state);
    
    const toggleLoading = (value: boolean) => {
        state.isLoading = value;
    }
    const toggleConfirmModal = (value: boolean) => {
        state.isConfirmModalVisible = value;
    }
    const setApiError = (error: APIError | null) => {
        state.apiError = error;
    }
}