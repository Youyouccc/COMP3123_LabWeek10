import React, { useState } from "react";
import "./App.css";

function App() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });

  // State to hold submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // State for checkbox
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAgreed) {
      setSubmittedData(formData);
    }
  };

  return (
    <div>
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="App">
          <label className="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          
          <label className="name">
            <p>Name</p>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            <p>Address</p>
            <input
              type="text"
              name="address"
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            <p>Address 2</p>
            <input
              type="text"
              name="address"
              placeholder="Apartment, studio, or floor"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label className="city">
            <p>City</p>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          
          <label className="Province">
            <p>Province</p>
            <select 
              name="province"
              value={formData.province}
              onChange={handleChange}
              required>
              <option value="">Choose...</option>
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Alberta">Alberta</option>
              <option value="Manitoba">Manitoba</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>          
            </select>
          </label>
          
          <label className="PostalCode">
            <p>Postal Code</p>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          {/* Agree to Terms Checkbox */}
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={handleCheckboxChange}
            />
            <p className="agree">Agree Terms & condition?</p>
          </label>
          <br />

          {/* Submit button, enabled only if terms are agreed */}
          <button type="submit" disabled={!termsAgreed}>
            Submit
          </button>
        </div>
      </form>

      {/* Display the submitted data below the form in the specified format */}
      {submittedData && (
        <div className="submitted-info">
          <h2>Submitted Information</h2>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
