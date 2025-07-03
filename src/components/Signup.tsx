import { useState } from "react";
import { LoginSignupLabels } from "../enum/LoginSignupLabels";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{LoginSignupLabels.NAME}</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>{LoginSignupLabels.EMAIL}</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>{LoginSignupLabels.PASSWORD}</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>{LoginSignupLabels.CONTACT}</label>
          <br />
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">{LoginSignupLabels.SIGNUP}</button>
      </form>
    </div>
  );
};

export default Signup;
