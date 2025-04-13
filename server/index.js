const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: "medicore-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/patients", require("./routes/patients"));
app.use("/api/doctors", require("./routes/doctors"));
app.use("/api/appointments", require("./routes/appointments"));
app.use("/api/pharmacy", require("./routes/pharmacy"));
app.use("/api/er", require("./routes/er"));
app.use("/api/finance", require("./routes/finance"));
app.use("/api/schedule", require("./routes/schedule"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
