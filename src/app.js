
import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js"; 
import { config } from "dotenv";
import testRoutes from "./routes/testRoutes.js";

config();

async function main() {
    const hostname = "localhost";
    const port = 3000;

    const app = express();

    const mongoConnection = await Mongo.connect(process.env.MONGO_CS);

	console.log(mongoConnection);

    app.use(express.json());
    app.use(cors());

    // Configura as rotas para o MoodRecord e Testes
    app.use("/tests", testRoutes);

    app.get("/", (_req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: "Bem vindos a minha API "
        });
    });

    app.listen(port, () => {
        console.log(`Server running: http://${hostname}:${port}`);
    });
}

main().catch((error) => {
    console.log("Error:", error);
});

//npm init -y