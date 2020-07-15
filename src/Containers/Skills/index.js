/* eslint-disable */
import React from "react"
import { Row, Col, Container, ProgressBar } from "react-bootstrap"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"
import CustomSpring from "../../Components/CustomSpring"

const text = <span>Skills</span>
function Skills() {
	return (
		<>
			<Container className="pb-5">
				<Row className="align-items-center mt-5">
					<Col md={12} className="mt-2">
						<PageInfoText text={text} />

						<Col md={12} className="mt-4">
							<PageInfoSubText text="Full Stack Developer" />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="mt-5">
						<CustomSpring time={500}>
							<div className="mt-3">
								<h4>Javascript</h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>

						<CustomSpring time={700}>
							<div className="mt-3">
								<h4>React</h4>
								<ProgressBar now={60} />
							</div>
						</CustomSpring>

						<CustomSpring time={1100}>
							<div className="mt-3">
								<h4>NodeJs</h4>
								<ProgressBar now={70} />
							</div>
						</CustomSpring>

						<CustomSpring time={1500}>
							<div className="mt-3">
								<h4>MySQL</h4>
								<ProgressBar now={60} />
							</div>
						</CustomSpring>
						<CustomSpring time={1700}>
							<div className="mt-3">
								<h4>MongoDB</h4>
								<ProgressBar now={30} />
							</div>
						</CustomSpring>

						<CustomSpring time={2100}>
							<div className="mt-3">
								<h4>Git</h4>
								<ProgressBar now={80} />
							</div>
						</CustomSpring>
					</Col>

					<Col md={6} className="mt-5">
						<CustomSpring time={800}>
							<div className="mt-3">
								<h4>HTML</h4>
								<ProgressBar now={80} />
							</div>
						</CustomSpring>

						<CustomSpring time={900}>
							<div className="mt-3">
								<h4>CSS</h4>
								<ProgressBar now={70} />
							</div>
						</CustomSpring>

						<CustomSpring time={1000}>
							<div className="mt-3">
								<h4>Bootstrap</h4>
								<ProgressBar now={50} />
							</div>
						</CustomSpring>

						<CustomSpring time={1200}>
							<div className="mt-3">
								<h4>PHP</h4>
								<ProgressBar now={50} />
							</div>
						</CustomSpring>
						<CustomSpring time={1600}>
							<div className="mt-3">
								<h4>C/C++</h4>
								<ProgressBar now={70} />
							</div>
						</CustomSpring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Skills
