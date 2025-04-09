import type { APIError, State } from "~/types";

const state = reactive<State>({
    isLoading: false,
    apiError: null,
    isConfirmModalVisible: false,
})

export default () => {
    
}