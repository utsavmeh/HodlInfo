const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());
const PORT = process.env.PORT || 5000;
const url = "https://api.wazirx.com/api/v2/tickers";

app.get("/test", (req, res) => {
	axios
		.get(url)
		.then((response) => {
			const req = response.data;
			const arr = [
				req.btcinr,
				req.xrpinr,
				req.ethinr,
				req.trxinr,
				req.eosinr,
				req.zilinr,
				req.batinr,
				req.zrxinr,
				req.omginr,
				req.iostinr,
			];

			res.json({ arr });
		})
		.catch((err) => {
			res.json({ err });
		});
});

app.listen(PORT, () => {
	console.log(`server is running on port number ${PORT}`);
});
