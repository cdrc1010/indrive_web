import { useState } from "react";
import { LoginSignupLabels } from "../enum/LoginSignupLabels";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    console.log("Login submitted:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">{LoginSignupLabels.LOGIN}</button>
      </form>
    </div>
  );
};

export default LoginForm;
