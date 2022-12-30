import express from "express";
import { connectDB } from "./db/connect.js";
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
    return res.status(200).json({ msg: "Yo" });
});
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
//# sourceMappingURL=app.js.map