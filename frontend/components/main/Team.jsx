import React from 'react';
import Card from './Card';

const About = () => {
	return (
		<div className="bg-[url('/images/bg.jpg')]">
			<div className="grid sm:grid-cols-2 gap-y-60 pt-12">
				<div className="sm:flex items-center justify-center sm:h-screen ">
					<div
						className="text-white text-6xl"
						style={{ transform: 'rotate(270deg)' }}
					>
						Our team
					</div>
				</div>
				<div className="">
					<div className="sm:flex items-center justify-start sm:h-screen ">
						<div className="sm:mr-10">
							<Card
								img="/images/team/Deependu.jpeg"
								name="Deependu Jha"
								role="BlockChain Developer"
								email="deependujha21@gmail.com"
								twitter="deependu__"
								twitterLink="https://twitter.com/deependu__"
							/>
						</div>
						<div className="sm:mr-20">
							<Card
								img="/images/team/nitesh.jpeg"
								name="Nitesh Kumar"
								role="Frontend Developer"
								email="nkumar35101@gmail.com"
								twitter="nkumar35101"
								twitterLink="https://twitter.com/nkumar35101"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
