import { Row, Col } from "react-bootstrap";
import { ListComponent } from "./ListComponent";
const List = ({ Sno, name, last, buy, volume, baseunit, sell }) => {
	return (
		<Row
			lg={6}
			style={{
				backgroundColor: "#303444",
				borderRadius: "10px",
			}}
			className='p-2 mr-4 ml-3 mt-5'>
			<ListComponent data={Sno} color='white' />
			<ListComponent data={name} color='white' />
			<ListComponent data={last} color='white' />
			<Row>
				<Col lg={6} className='ml-4' style={{ textAlign: "center" }}>
					<h1 style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
						&#8377;{buy}/&#8377;{sell}
					</h1>
				</Col>
			</Row>
			<ListComponent data={volume} color='white' />
			<ListComponent data={baseunit} color='white' />
		</Row>
	);
};

export default List;
