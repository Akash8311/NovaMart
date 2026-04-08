import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Payment = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto flex gap-5 px-5">
        
        {/* LEFT COLUMN */}
        <div className="leftcol w-[70%]">
          <div className="card bg-white shadow-lg p-6 rounded-xl w-full">

            <h1 className="text-2xl font-semibold mb-5">
              Billing Details
            </h1>

            <form className="w-full flex flex-col gap-4">

              {/* Name */}
              <div className="flex gap-4">
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </div>

              {/* Email & Phone */}
              <div className="flex gap-4">
                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                />
                <TextField
                  label="Phone Number"
                  type="tel"
                  fullWidth
                />
              </div>

              {/* Address */}
              <TextField
                label="Street Address"
                fullWidth
                multiline
                rows={2}
              />

              {/* City + State */}
              <div className="flex gap-4">
                <TextField label="City" fullWidth />

                <TextField
                  select
                  label="State"
                  fullWidth
                >
                  <MenuItem value="WB">West Bengal</MenuItem>
                  <MenuItem value="MH">Maharashtra</MenuItem>
                  <MenuItem value="DL">Delhi</MenuItem>
                  <MenuItem value="KA">Karnataka</MenuItem>
                </TextField>
              </div>

              {/* Zip + Country */}
              <div className="flex gap-4">
                <TextField
                  label="Zip Code"
                  type="number"
                  fullWidth
                />

                <TextField
                  label="Country"
                  defaultValue="India"
                  fullWidth
                />
              </div>

              {/* Company (optional) */}
              <TextField
                label="Company (Optional)"
                fullWidth
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-black text-white py-3 rounded-md mt-3 hover:bg-gray-800 transition"
              >
                Proceed to Payment →
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT COLUMN (Optional Summary) */}
        <div className="rightcol w-[30%]">
          <div className="card bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <p className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹999</span>
            </p>

            <p className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </p>

            <hr className="my-3" />

            <p className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹999</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Payment;