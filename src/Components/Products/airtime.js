import React, { useState, useContext, useEffect } from "react";
import { Container } from "reactstrap";
import { Buttons } from "../../Utils";
import moment from "moment";
import { ModalComponents } from "..";
import { GlobalState } from "../../Data/Context";

const Airtime = () => {
	let [isOpen, setIsOpen] = useState(false),
		toggle = () => {
			setIsOpen(!isOpen);
		};

	let { setStateName } = useContext(GlobalState);
	useEffect(() => {
		setStateName("airtime history");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="bg-white aboutScreen">
			<Container className="py-5">
				<Buttons
					title={"buy airtime"}
					css="btn-primary1 text-capitalize py-3 px-4 px-lg-5"
					width={"w-25 w25"}
					onClick={toggle}
					style={{ borderRadius: "30px" }}
				/>
				<AirtimeHistory />
			</Container>
			<ModalComponents title="buy airtime" isOpen={isOpen} back={toggle}>
				<div className="downH2 d-flex">
					<form className="w-100">
						<div className="mb-4">
							<label htmlFor="Newtwork">Network</label>
							<select
								name="network"
								id="network"
								className="form-control form-select py-3 rounded20">
								<option value="mtn">MTN</option>
							</select>
						</div>
						<div className="mb-4">
							<label htmlFor="value">Value</label>
							<input
								type={"number"}
								placeholder="500"
								className="form-control py-3"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="telephone">Phone number</label>
							<input
								type={"tel"}
								placeholder="08012345678"
								className="form-control py-3"
							/>
						</div>
						<Buttons
							title={"buy"}
							css="btn-primary1 text-capitalize py-3 px-4 px-lg-5"
							width={"w-25 w25"}
							onClick={toggle}
							style={{ borderRadius: "30px" }}
						/>
					</form>
				</div>
			</ModalComponents>
		</div>
	);
};

export default Airtime;

const AirtimeHistory = () => {
	let historyList = [
		{
			id: "CONV-12",
			reference: "1234567876543",
			date: Date.now(),
			telephone: "081234567890",
			amount: 5000,
			status: "delivered",
			network: "MTN",
			discount: 3,
		},
	];

	return (
		<div className="pb-5 my-5">
			<div className="bland row mx-0 p-3 text-capitalize">
				<div className="col">ID</div>
				<div className="col">network</div>
				<div className="col">date</div>
				<div className="col">discount</div>
				<div className="col">price</div>
				<div className="col">status</div>
				<div className="col">action </div>
			</div>
			<div className="bg-white row mx-0">
				{historyList?.map((item, index) => (
					<div key={index} className="row mx-0 py-3">
						<div className="col my-auto">{item?.id}</div>
						<div className="col my-auto">{item?.network}</div>
						<div className="col my-auto">
							{moment(item?.createdAt).format("L")}
						</div>
						<div className="col my-auto">{item?.discount}%</div>
						<div className="col my-auto">{item?.amount}</div>
						<div className="col my-auto">{item?.status}</div>
						<div className="col my-auto">view</div>
					</div>
				))}
			</div>
		</div>
	);
};
