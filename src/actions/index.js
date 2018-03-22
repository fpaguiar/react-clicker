export const updateCounter = count => {
    return {
        type: 'UPDATE_COUNTER',
        payload: {
            counter: count
        }
    }
}