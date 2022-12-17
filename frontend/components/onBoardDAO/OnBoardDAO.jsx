import 'dotenv/config';
import React from 'react';
import { Button, Label, TextInput, Textarea, Select } from 'flowbite-react';
import { useState } from 'react';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';
import axios from 'axios';

const initialValues = {
	dao_name: '',
	dao_short_desc: '',
	dao_desc: '',
	dao_logo: '',
	dao_chain: 'Ethereum',
	dao_creator_address: '',
};

const OnBoardDAO = () => {
	const [formdata, setformdata] = useState(initialValues);
	const [loading, setLoading] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setformdata({
			...formdata,
			[name]: value,
		});
	};

	const formSubmit = async (e) => {
		e.preventDefault();
		// console.log('form data: ', formdata);
		const { dao_name, dao_chain, dao_creator_address } = formdata;
		let msg = '';

		if (dao_name === '') {
			msg = 'Please enter DAO name.';
		} else if (dao_chain === '') {
			msg = 'Please enter the chain of your DAO.';
		} else if (dao_creator_address === '') {
			msg = 'Please enter the wallet address of the creator of the DAO.';
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
			setLoading(true);

			try {
				const result = await axios({
					method: 'post',
					url: 'http://127.0.0.1:4000/dao',
					headers: {
						authorized_access_token:
							process.env.NEXT_PUBLIC_AUTHORIZED_ACCESS_TOKEN,
					},
					data: {
						...formdata,
					},
				});
				console.log(result);
				swal({
					title: 'Welcome to Drift-DAO',
					text: `We warm-heartedly welcome you to Drift-DAO. Here's your DAO id: ${result.data._id}`,
					icon: 'success',
				});
				setformdata(initialValues);
				setLoading(false);
        
			} catch (e) {
				setLoading(false);
				swal({
					title: 'An error occurred!',
					text: e,
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
			}
		}
	};

	return (
    <div
      className="text-white mx-auto py-7 h-screen "
      style={{ maxWidth: "500px" }}
    >
      <form className="flex flex-col gap-4 mx-4 my-10">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name11" value="DAO name" className="text-white" />
          </div>
          <TextInput
            id="daoname11"
            type="text"
            value={formdata.dao_name}
            onChange={handleInputChange}
            name="dao_name"
            placeholder="DAO name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name11"
              value="DAO short description"
              className="text-white"
            />
          </div>
          <Textarea
            id="dao_short_desc11"
            type="text"
            value={formdata.dao_short_desc}
            onChange={handleInputChange}
            name="dao_short_desc"
            required={true}
            placeholder="One line description of DAO"
            rows={2}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name11"
              value="DAO description"
              className="text-white"
            />
          </div>
          <Textarea
            id="dao_desc11"
            type="text"
            value={formdata.dao_desc}
            onChange={handleInputChange}
            name="dao_desc"
            required={true}
            placeholder="Brief description of DAO"
            rows={4}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="logo11"
              value="DAO logo URL"
              className="text-white"
            />
          </div>
          <TextInput
            id="dao_logo11"
            type="text"
            value={formdata.dao_logo}
            onChange={handleInputChange}
            name="dao_logo"
            placeholder="URL of DAO's logo"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block ">
            <Label
              htmlFor="countries"
              value="Select BlockChain"
              className="text-white"
            />
          </div>
          <Select
            id="chain"
            name="dao_chain"
            required={true}
            value={formdata.dao_chain}
            onChange={handleInputChange}
          >
            <option>Ethereum</option>
            <option>Polygon (Matic)</option>
            <option>Near</option>
            <option>Solana</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="logo11"
              value="Address of the creator of the DAO on Drift-DAO"
              className="text-white"
            />
          </div>
          <TextInput
            id="dao_creator_addr_11"
            type="text"
            value={formdata.dao_creator_address}
            onChange={handleInputChange}
            name="dao_creator_address"
            placeholder="wallet address"
            required={true}
          />
        </div>

        <Button
          size="lg"
          onClick={formSubmit}
          gradientDuoTone="greenToBlue"
          type="submit"
        >
          {loading ? (
            <div className="flex ">
              <div className="pr-4">Please wait...</div>
              <div>
                <ReactLoading type="spin" color="#fff" height={30} width={30} />
              </div>
            </div>
          ) : (
            <div>Submit</div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default OnBoardDAO;
