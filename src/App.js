// Import necessary libraries
import React from "react";
import "./App.css";
import { Controller, useForm } from "react-hook-form";

function App() {
  // Destructure form control, submission handling, and form state
  const { control, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  // Function to handle form submission
  const onSubmit = (data) => {
    // Handle form submission here
    alert(`Form Data:\n${JSON.stringify(data, null, 2)}`);
  };

  // Function to handle form cancellation
  const handleCancel = () => {
    reset({
      name: "",
      age: "",
      email: "",
    });
  };

  // Function to handle confirming form submission
  const handleConfirmSubmit = () => {
    if (Object.keys(errors).length === 0) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="App">
      {/* Your logo SVG code here */}

      <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="header">React Form</h3>
        <div className="form-group">
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="text" />
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <Controller
            name="age"
            control={control}
            rules={{ required: "Age is required", min: 1 }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="number" />
                {errors.age && (
                  <span className="error-message">{errors.age.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "E-mail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid E-mail address",
              },
            }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="text" />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="button-group">
          <button
            type="button"
            onClick={handleConfirmSubmit}
            className="submit-button"
          >
            SUBMIT
          </button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
