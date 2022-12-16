import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import Alert from "../sweet_alert/Alert";
import swal from "sweetalert";


const initialValues = {
  name: "",
  email: "",
  message: "",
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

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("data :", formdata);
    swal("Good job!", "You clicked the button!", "success");
    setformdata(initialValues);
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
          <p className="text-red-300">
            Please enter a valid email address
          </p>
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
