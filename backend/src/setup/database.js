const mongodb = require("mongodb");
const uri = "mongodb://localhost/onfon";

module.exports = async () => {
  const client = new mongodb.MongoClient(uri, { useUnifiedTopology: true });

  await client.connect();

  return client.db();
};
