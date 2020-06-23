const mongodb = require("mongodb");
const uri = "mongodb://localhost/onfon";

module.exports = () => {
  const client = new mongodb.MongoClient(uri, { useUnifiedTopology: true });

  return client.connect();
};
