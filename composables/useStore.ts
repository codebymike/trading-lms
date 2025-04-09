export type APIError = {
    statusCode: number;
    statusMessage: string;
    message: string;
    data?: Record<string, any>;
}

export type State = {
    isLoading: boolean;
    apiError: APIError | null;
    isConfirmModalVisible: boolean;
}