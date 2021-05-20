import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownComponent = ({ data }) => {
	return (
		<DropdownButton
			key='Secondary'
			id='dropdown-variants-secondary'
			variant='secondary'
			title={data}
			style={{ borderRadius: "50%" }}>
			<Dropdown.Item eventKey='1'>{data}</Dropdown.Item>
		</DropdownButton>
	);
};

export default DropdownComponent;
