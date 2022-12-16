import React from 'react';
import { Card } from 'flowbite-react';

const Cardabout = ({ img, name, role, email, twitter, twitterLink }) => {
	return (
		<div className="max-w-sm m-auto ">
			<Card imgSrc={img}>
				<h5 className="text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
					{name}
				</h5>
				<a href={`mailto: ${email}`}>
					<div className="font-normal text-pink-500 dark:text-gray-400">
						email: {email}
					</div>
				</a>
				<a href={twitterLink} target="_blank">
					<div className="font-normal text-purple-900 dark:text-gray-400">
						twitter: {twitter}
					</div>
				</a>
				<p></p>
			</Card>
		</div>
	);
};

export default Cardabout;
