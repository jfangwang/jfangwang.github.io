import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.scss";
import Google from './images/google-square.png';
import TalkHiring from './images/talk-hiring-logo.jpeg';
import Bah from './images/bah-logo.png';
import Navigation_bar from './components/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: window.innerHeight,
			width: window.innerWidth
		}
		this.updateBackground = this.updateBackground.bind(this);
		this.setBackground = this.setBackground.bind(this);
		window.addEventListener("resize", this.updateBackground);
	}

	componentDidMount = () => {
		this.updateBackground();
	}

	updateBackground = () => {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		},
		this.setBackground()
		)
	}

	setBackground = () => {
		const image = document.getElementById("home");
		console.log(this.state.width / (this.state.width + this.state.height))

		if (this.state.width / (this.state.width + this.state.height) > 0.57) {
			image.classList.add("background-desktop");
			image.classList.remove("background-mobile");
		} else {
			image.classList.add("background-mobile");
			image.classList.remove("background-desktop");
		}
	}


	render() {

		return (
			<>
				{/* Navbar */}
				<Navigation_bar />
				{/* Intro Section */}
				<section id="home" className="intro background-mobile">
					<h1 className="display-1">Jonathan Wang</h1>
				</section>
				{/* About Section */}
				<section id="about" className="about">
					<div className="questions">
						<h1 className="display-1">About Me</h1>
						<h2>Welcome! My name is Jonathan Wang and I am currently a student studying computer science.</h2>
						<h1>What am I doing right now?</h1>
						<p>Currently interning at <b>Booz Allen Hamilton</b> (Top 5 consulting firm) where I am the front end developer of the entire project.</p>
						<h1>What am I interested in?</h1>
						<p>I love Full Stack and Front End development where I can tie pieces of software together and make it look nice. Also started dabbling in native iOS and Android development</p>
						<h1>Where have I worked at?</h1>
					</div>

					<div className="card-list">
					<Card className="work-card">
						<Card.Img variant="top" src={Google} />
						<Card.Body>
							<Card.Title>CSSI Intern</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">June 2018 - July 2018</Card.Subtitle>
							<Card.Text>
							Selected as one of the 30 students who participated in an intensive 3 week programming institute learning web app development in HTML, CSS, Javascript, Python and Google AppEngine from Google engineers.
							</Card.Text>
						</Card.Body>
						<Card.Footer className="text-muted">Learned: HTML, CSS, JS, Python, Google App Engine,</Card.Footer>
					</Card>
					<Card className="work-card">
						<Card.Img variant="top" src={TalkHiring} />
						<Card.Body>
							<Card.Title>Software Engineering Intern</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">June 2019 - August 2019</Card.Subtitle>
							<Card.Text>
							Helped re-design the home page with Typescript and Python. We were able to decrease load times by 50% and scaled the website as user traffic increased linearly over time. I participated in weekly code reviews and learned to document code using Google Style Python Docstrings.
							</Card.Text>

						</Card.Body>
						<Card.Footer className="text-muted">Learned: Git, Typescript, Documenting, Code Reviewing</Card.Footer>
					</Card>
					<Card className="work-card">
						<Card.Img variant="top" src={Bah} />
						<Card.Body>
							<Card.Title>Software Engineering Intern</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">June 2020 - August 2020</Card.Subtitle>
							<Card.Text>
							Built a web app to look at camera footage and detect anomalies with Facebook's Detectron 2 and Machine Learning running on a docker server. This system could detect whether a situation is normal or not before a disaster occurs. Throughout the internship, I developed professional skills by attending tech, leadership, and networking events provided by Booz.
							</Card.Text>
						</Card.Body>
						<Card.Footer className="text-muted">Learned: SQL, Node.js, Docker, Virtual Box</Card.Footer>
					</Card>
					<Card className="work-card">
						<Card.Img variant="top" src={Bah} />
						<Card.Body>
							<Card.Title>Software Engineering Intern</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">June 2021 - August 2021</Card.Subtitle>
							<Card.Text>
							Returned to Booz Allen to work on another web app that can determine if a twitter account is authentic or not by building a Natural Language Processing ML model. Was in charge of the front-end development again and decided to use React to build an end to end web application.
							</Card.Text>
						</Card.Body>
						<Card.Footer className="text-muted">Learned: React, Flask, MongoDB, Amazon EC2 Server</Card.Footer>
					</Card>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects">
					<div className="project-intro">
						<h1 className="display-1">Projects</h1>
						<h2 classname="display-2">Recent Projects</h2>
					</div>
					<div className="card-list">
					<Card className="text-center project-card">
						<Card.Body className="card-body">
							<Card.Title>Snap Chat Clone</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">June 2021</Card.Subtitle>
							<Card.Text>
							A cloned version of Snap Chat if it was a webapp.
							</Card.Text>
							<Button className="card-button" variant="primary" href="https://project-yellow-ghost.firebaseapp.com">Try it out</Button>
							<Button className="card-button" variant="primary" href="https://github.com/jfangwang/webrtc_demos">Project Link</Button>
						</Card.Body>
						<Card.Footer className="text-muted">Built with: React, Google Firebase</Card.Footer>
					</Card>
					<Card className="text-center project-card">
						<Card.Body className="card-body">
							<Card.Title>HW Checker</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">December 2020</Card.Subtitle>
							<Card.Text>
							A command line tool to automate checking HW grades after pushing to github.
							</Card.Text>
							<Button className="card-button" variant="primary" href="https://github.com/jfangwang/HBChecker">Project Link</Button>
						</Card.Body>
						<Card.Footer className="text-muted">Built with: Python, Selenium Web Scraper</Card.Footer>
					</Card>
					<Card className="text-center project-card">
						<Card.Body className="card-body">
							<Card.Title>Tempt</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">July 2018</Card.Subtitle>
							<Card.Text>
							A time management chrome extension that alerts you after setting a timer.
							</Card.Text>
							<Button className="card-button" variant="primary" href="https://chrome.google.com/webstore/detail/tempt/banokpiegiaaoihabbogencnmpdljnbe?hl=en">Try it out</Button>
							<Button className="card-button" variant="primary" href="https://github.com/zarrinali95/Tempt">Project Link</Button>
						</Card.Body>
						<Card.Footer className="text-muted">Built with: Python, Javascript, HTML/CSS, Google App Engine, and Chrome API</Card.Footer>
					</Card>
					</div>
				</section>

				{/* Blog Section */}
				{/* <section id="blog">
				<div className="questions">
					<h1 className="display-1">Blog</h1>
					<h2>I write about my own personal coding experiences.</h2>
				</div>

				</section> */}

				{/* Contact Section */}
				{/* <section id="contact">
				<div className="questions">
					<h1 className="display-1">Contact</h1>
					<h2>Want to get in touch?</h2>
					<div className="card-list">
					<Card className="work-card">
						<Card.Header>Email</Card.Header>
						<Card.Body>
							<Card.Text>qbs1864@gmail.com</Card.Text>
						</Card.Body>
					</Card>
					<Card className="work-card">
						<Card.Header></Card.Header>
						<Card.Body>
							<Card.Text>qbs1864@gmail.com</Card.Text>
						</Card.Body>
					</Card>
					</div>
				</div>
				</section> */}

				<div className="footer">
					<p>Designed by Jonathan Wang</p>
				</div>

			</>
		)
	}
}
