import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();
const { Client } = pg;

const clientOptions = {
  connectionString: process.env.PGURI,
};

const client = new Client(clientOptions);

const connectDB = async () => {
  await client.connect();

  // CREATES THE TABLE IS IF'S NOT ALREADY CREATED,OTHERWISE SKIPS THIS QUERY
  await client.query(
    "CREATE TABLE IF NOT EXISTS plant(plant_uid UUID NOT NULL PRIMARY KEY,familiar_name VARCHAR(100) NOT NULL,scientific_name VARCHAR(100) NOT NULL,plant_family VARCHAR(100) NOT NULL,price MONEY NOT NULL,stock INT NOT NULL,discovery_date DATE NOT NULL,primary_color VARCHAR(50) NOT NULL,UNIQUE(scientific_name))"
  );
};

export { client, connectDB };
