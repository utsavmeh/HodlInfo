import { Row, Col } from "react-bootstrap";

const ListComponent = ({ data }) => {
	return (
		<Row>
			<Col lg={6} className='ml-4' style={{ textAlign: "center" }}>
				<h1 style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
					{data}
				</h1>
			</Col>
		</Row>
	);
};

const ListComponent2 = ({ data }) => {
	return (
		<Row>
			<Col lg={6} className='ml-4' style={{ textAlign: "center" }}>
				<h1 style={{ color: "grey", fontSize: "20px", fontWeight: "bold" }}>
					{data}
				</h1>
			</Col>
		</Row>
	);
};
export { ListComponent, ListComponent2 };
