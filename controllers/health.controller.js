const Test = require("../models/Test");

exports.healthCheck = async (req, res) => {
  try {
    const testDoc = await Test.create({ name: "Ping" });
    res.status(200).json({
      status: "OK its wroking ",
      dbTest: testDoc,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.new = async (req, res) => {
  try {
    const testDoc = await Test.create({ name: "PingPong" });
    res.status(200).json({
      status: "ths is newwwwwwwwwwwwwwwwwwww ",
      dbTest: testDoc,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};