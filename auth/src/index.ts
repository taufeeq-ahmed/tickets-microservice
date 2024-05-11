import express from "express"

import { currentUserRouter, signinRouter, signoutRouter, signupRouter } from "./routes"

const app = express()

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.listen(3000, () => {
    console.log("🟢🟢 auth-server up on port : 3000");
})
