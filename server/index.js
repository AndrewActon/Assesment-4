const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createUser, addNickname, deleteNick } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/user", createUser);
app.put("/api/user", addNickname);
app.delete("/api/user", deleteNick);

app.listen(4001, () => console.log("Server running on 4001"));
