const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export {
    increment, decrement, signIn, signOut
}