import EventEmitter from 'events'
export const emitter = new EventEmitter()

emitter.on("logIn", (username) => {
    console.log(`User with username: ${username} logged in`)
})

emitter.on("logOut", (username) => {
    console.log(`User with username: ${username} logged out`)
})

emitter.on("register", (username) => {
    console.log(`New user with username: ${username} registered`)
})