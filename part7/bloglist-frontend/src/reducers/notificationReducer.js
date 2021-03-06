export default (state = { message: '', timeoutId: null }, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return {
      message: action.message,
      severity: action.severity,
      timeoutId: action.timeoutId
    }
  case 'REMOVE_NOTIFICATION':
    return {
      message: ''
    }
  default:
    return state
  }
}

export const setNotification = (message, timeout, severity) => {
  return async (dispatch, getState) => {
    const timeoutId = getState().notification.timeoutId
    clearTimeout(timeoutId)
    dispatch({
      type: 'SET_NOTIFICATION',
      message: message,
      severity: severity,
      timeoutId: setTimeout(() => {
        dispatch(removeNotification())
      }, timeout * 1000)
    })
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}