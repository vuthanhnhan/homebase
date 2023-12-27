import { DataSource } from "typeorm"
import { User } from "../entities/User"

const dataSource = new DataSource({
    type: "sqlite",
    entities: [User],
    database: "./src/database/express.sqlite3",
    synchronize: false
})

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    })

export default dataSource