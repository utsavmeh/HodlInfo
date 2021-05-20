import axios from "axios";
import { useEffect, useState } from "react";
import List from "./components/List";
import { Row, Button, Col, Image } from "react-bootstrap";
import Switch from "react-switch";
import DropdownComponent from "./components/DropdownComponent";
import { ListComponent2 } from "./components/ListComponent";

const App = () => {
	var i = 0;
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("/test").then((response) => {
			// data = response.data.arr;
			setData(response.data.arr);
		});
	}, []);

	return (
		<>
			<Row style={{ marginTop: "10px" }}>
				<Col style={{ marginLeft: "10px" }}>
					<h1
						className='brand-text'
						style={{ color: "#3cc4c4", marginLeft: "20px" }}>
						HODLINFO
						<span style={{ fontSize: "20px", color: "white" }}>.com</span>
						<span
							style={{
								marginLeft: "80%",
							}}></span>
					</h1>
				</Col>
				<Row style={{ marginTop: "15px" }}>
					<Col className='mr-2'></Col>
					<DropdownComponent data='INR' />
					<Col>
						<DropdownComponent data='BTC' />
					</Col>
				</Row>
				<Col style={{ marginTop: "10px" }}>
					<Row>
						<Col />

						<Col style={{ textAlign: "right", marginTop: "8px" }}>
							<Image src='/ss.png'></Image>
						</Col>
						<Col style={{ marginTop: "10px" }}>
							<Button
								style={{ backgroundColor: "#3cc4c4", borderRadius: "10px" }}>
								<Image style={{ width: "15px" }} src='/index.png' /> Connect
								Telegram
							</Button>
						</Col>
						<Col style={{ marginTop: "14px", textAlign: "left" }}>
							<Switch
								checked={true}
								onHandleColor='#3cc4c4'
								onColor='#808080'
								uncheckedIcon={false}
								checkedIcon={false}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row style={{ marginLeft: "10px" }}>
				<h6 style={{ color: "grey", marginLeft: "20px" }}>
					Powered By
					<span style={{ color: "#3cc4c4", marginLeft: "10px" }}>
						Finstreet
					</span>
				</h6>
			</Row>
			<Row lg={6} style={{ marginTop: "50px", marginLeft: "10px" }}>
				<ListComponent2 data='#' />
				<ListComponent2 data='name' />
				<ListComponent2 data='Last' />
				<ListComponent2 data='Buy/Sell Price' />
				<ListComponent2 data='volume' />
				<ListComponent2 data='base_unit' />
			</Row>

			{data !== "undefined"
				? data.map((result) => {
						i = i + 1;
						return (
							<List
								Sno={i}
								name={result.name}
								last={result.last}
								buy={result.buy}
								volume={result.volume}
								baseunit={result.base_unit}
								sell={result.sell}
							/>
						);
				  })
				: console.log("sandkjsfjei")}
		</>
	);
};

export default App;
