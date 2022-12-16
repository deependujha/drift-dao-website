import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Navbar from '../../components/layout/Navbar';

const Home = () => {
	return (
		<div
			className="bg-[url('/images/bg.jpg')] h-auto"
			style={{ height: '100vh' }}
		>
			<Navbar />
			<div className=" text-center pt-24">
				<div className="sm:text-9xl text-white font-bold italic text-6xl">
					CONTEXT TO
				</div>
				<div className="sm:text-8xl text-white italic text-5xl mt-4">
					EMPOWER
				</div>
				<div className="sm:text-5xl text-white my-6 text-2xl">
					peoples in web3
				</div>
			</div>
			<div className="flex justify-center">
				<Image
					// className={styles.img}
					src="/images/logo-white.png"
					height="200"
					width="522"
					alt="load..."
					priority={true}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</div>
		</div>
	);
};

export default Home;
