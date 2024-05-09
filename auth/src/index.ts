import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("root")
})
app.listen(3000, () => {
    console.log("🟢🟢 auth-server up on port : 3000");
})
