import 'dotenv/config';
import React from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const initialValues = {
	name: '',
	email: '',
	message: '',
};

const Contact_form = () => {
	const [formdata, setformdata] = useState(initialValues);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setformdata({
			...formdata,
			[name]: value,
		});
	};

	// Validate if a string an email
	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	const formSubmit = async (e) => {
		e.preventDefault();
		const { name, email, message } = formdata;
		let msg = '';

		if (name === '') {
			msg = 'Please enter your name.';
		} else if (email === '') {
			msg = 'Please enter your email.';
		} else if (message === '') {
			msg = 'Please enter your message.';
		} else if (validateEmail(email) === false) {
			msg = 'Please enter a valid email address';
		}

		if (msg) {
			swal({
				title: 'Error!',
				text: msg,
				icon: 'error',
				buttons: {
					cancel: {
						text: 'Close',
						value: true,
						visible: true,
						className: '',
						closeModal: true,
					},
				},
			});
		} else {
			swal({
				title: 'Thank you!',
				text: 'Thank you, we will soon reach out to you.',
				icon: 'success',
			});
			// sendMailToUs(name, email, message);
			setformdata(initialValues);
			const result = await axios({
				method: 'post',
				url: 'https://www.backend.drift-dao.com/contactForm',
				headers: {
					authorized_access_token:
						process.env.NEXT_PUBLIC_AUTHORIZED_ACCESS_TOKEN,
				},
				data: {
					name,
					email,
					message,
				},
			});
			console.log(result);
		}
	};

	return (
		<div className="max-w-lg">
			<form className="flex flex-col gap-4">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="name11" value="Your name" className="text-white" />
					</div>
					<TextInput
						id="name11"
						type="text"
						value={formdata.name}
						onChange={handleInputChange}
						name="name"
						required={true}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email1" value="Your email" className="text-white" />
					</div>
					<TextInput
						id="email1"
						type="email"
						value={formdata.email}
						onChange={handleInputChange}
						name="email"
						placeholder="@drift-dao.com"
						required={true}
					/>
					{/* <p className="text-red-300">Please enter a valid email address</p> */}
				</div>

				<div id="textarea">
					<div className="mb-2 block">
						<Label
							htmlFor="comment"
							value="Your message"
							className="text-white"
						/>
					</div>
					<Textarea
						id="comment"
						value={formdata.message}
						onChange={handleInputChange}
						name="message"
						placeholder="Leave a comment..."
						required={true}
						rows={4}
					/>
				</div>
				<Button
					size="lg"
					onClick={formSubmit}
					gradientDuoTone="purpleToPink"
					type="submit"
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Contact_form;
