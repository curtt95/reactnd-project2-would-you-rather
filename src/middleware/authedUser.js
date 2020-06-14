const authedUser = (store) => (next) => (action) => {
    //if () {
        console.log(window.location.hostname)
    //}
    return next(action)
}

export default authedUser