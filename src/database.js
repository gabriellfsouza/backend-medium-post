import mongoose from "mongoose";

import mongoConfig from "./configs/mongoConfig";

/**
 * This class is used to make connections between all databases at a single point.
 */
class Database {
  constructor() {
    this.mongo();
  }

  async mongo() {
    // verify if a connection is already established or if is already connecting
    // by another process
    if (
      mongoose.connection.readyState !== 1 &&
      mongoose.connection.readyState !== 2
    ) {
      this.mongoConnection =
        process.env.NODE_ENV !== "test"
          ? await mongoose.connect(mongoConfig.mongoUrl(), mongoConfig.config)
          : await mongoose.connect(process.env.MONGO_URL, {
              useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true,
            });
    }

    return this.mongoConnection;
  }
}

export default new Database();
