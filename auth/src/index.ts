import express from "express"

const app = express()

app.get("/api/users/current-user", (req, res) => {
    res.send("hello there")
})

app.listen(3000, () => {
    console.log("🟢🟢 auth-server up on port : 3000");
})
