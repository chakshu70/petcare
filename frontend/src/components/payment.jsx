import React, { useState, useEffect } from "react";

function MakePayment() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  // Load PayPal script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // PayPal SDK script loaded, we can now render the PayPal button
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    alert("Payment Successful!");
  };

  const handlePaypalSuccess = (details, data) => {
    alert("Payment successful with PayPal!");
  };

  const handlePaypalError = (err) => {
    console.error("PayPal Payment Error", err);
    alert("Payment failed. Please try again.");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-xl">
      <div className="text-center text-3xl font-bold text-blue-600 mb-6">Make Payment</div>

      {/* Payment Amount */}
      <div className="mb-4">
        <label htmlFor="amount" className="block text-lg font-semibold text-gray-700">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="w-full p-4 mt-2 border border-gray-300 rounded-xl text-xl"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-700">Payment Method</label>
        <div className="flex justify-between mt-2">
          <div
            className={`flex-1 p-4 text-center cursor-pointer rounded-xl ${
              paymentMethod === "credit" ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setPaymentMethod("credit")}
          >
            Credit Card
          </div>
          <div
            className={`flex-1 p-4 text-center cursor-pointer rounded-xl ${
              paymentMethod === "debit" ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setPaymentMethod("debit")}
          >
            Debit Card
          </div>
          <div
            className={`flex-1 p-4 text-center cursor-pointer rounded-xl ${
              paymentMethod === "paypal" ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setPaymentMethod("paypal")}
          >
            PayPal
          </div>
        </div>
      </div>

      {/* Payment Info */}
      {paymentMethod === "credit" && (
        <div className="mb-6">
          <label htmlFor="creditCardNumber" className="block text-lg font-semibold text-gray-700">
            Credit Card Number
          </label>
          <input
            type="text"
            id="creditCardNumber"
            className="w-full p-4 mt-2 border border-gray-300 rounded-xl text-xl"
            placeholder="Enter Credit Card Number"
          />
        </div>
      )}

      {paymentMethod === "debit" && (
        <div className="mb-6">
          <label htmlFor="debitCardNumber" className="block text-lg font-semibold text-gray-700">
            Debit Card Number
          </label>
          <input
            type="text"
            id="debitCardNumber"
            className="w-full p-4 mt-2 border border-gray-300 rounded-xl text-xl"
            placeholder="Enter Debit Card Number"
          />
        </div>
      )}

      {paymentMethod === "paypal" && (
        <div className="mb-6">
          <div id="paypal-button-container" />
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-700">
              You can pay using PayPal by clicking the button below.
            </p>
          </div>
        </div>
      )}

      {/* Expiry Date and CVV */}
      {(paymentMethod === "credit" || paymentMethod === "debit") && (
        <div className="flex justify-between mb-6">
          <div className="w-1/2 pr-2">
            <label htmlFor="expiryDate" className="block text-lg font-semibold text-gray-700">
              Expiry Date
            </label>
            <input
              type="month"
              id="expiryDate"
              className="w-full p-4 mt-2 border border-gray-300 rounded-xl text-xl"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="cvv" className="block text-lg font-semibold text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full p-4 mt-2 border border-gray-300 rounded-xl text-xl"
              placeholder="CVV"
            />
          </div>
        </div>
      )}

      {/* Submit Button */}
      {paymentMethod !== "paypal" && (
        <button
          onClick={handlePayment}
          className="w-full py-4 bg-purple-600 text-white text-xl rounded-xl hover:bg-purple-700 transition duration-300"
        >
          Pay Now
        </button>
      )}
    </div>
  );
}

export default MakePayment;