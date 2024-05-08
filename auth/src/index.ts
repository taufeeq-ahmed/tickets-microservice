import express from "express"

const app = express()

app.listen(3000, () => {
    console.log("🟢🟢 auth-server up on port : 3000");
})