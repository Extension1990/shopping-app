const allowlist = ["http://localhost:3000", "http://localhost:8000", "http://localhost:4000"];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (allowlist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  exposedHeaders: ["WWW-Authenticate"],
};

module.exports = corsOptions;
