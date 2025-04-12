export const handleError = (error: any) => {
    const generalMessage = "An unexpected error occurred"
    let statusCode = 500
    let statusMessage = "Internal Server Error"
    let message = generalMessage
    let data = undefined

    if ( error.response ) {
        statusCode = error.response.status
        statusMessage = error.response.statusText

        if ( error.response._data ) {
            data = error.response._data && error.response.errors ? error.response.errors : undefined
            message = error.response._data && error.response._data.message ? error.response._data.message : generalMessage
        }

    }
}