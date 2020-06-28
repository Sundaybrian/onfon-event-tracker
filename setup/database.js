const mongodb = require("mongodb");

module.exports = async () => {
  const client = new mongodb.MongoClient(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
  });

  await client.connect();

  // return db instance
  return client.db();
};
