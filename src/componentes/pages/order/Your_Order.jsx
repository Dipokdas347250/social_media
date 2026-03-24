import React from 'react'
import { Link } from "react-router";
import cart0 from "../../../assets/cart0.png"


const Your_Order = () => {
  return (
    <>
       <div className="bg-linear-to-br from-gray-100 to-gray-200 min-h-screen p-4 md:p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Order #123456
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Placed on March 20, 2026
            </p>
          </div>

          <span className="mt-3 md:mt-0 px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 shadow-sm">
            Delivered
          </span>
        </div>

        {/* Products */}
        <div className="mt-6 space-y-4">

          <div className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4 hover:shadow-md transition">

            <img
              src={cart0}
              alt="product"
              className="w-20 h-20 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-lg">
                Wireless Headphones
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Quantity: 1
              </p>
            </div>

            <p className="font-semibold text-gray-800 text-lg">$120</p>
          </div>

        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Shipping */}
          <div className="bg-gray-50 rounded-2xl p-5 border">
            <h4 className="font-semibold text-gray-800 mb-2">
              Shipping Address
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dipok Das <br />
              Dhaka, Bangladesh <br />
              +8801871118902
            </p>
          </div>

          {/* Payment */}
          <div className="bg-gray-50 rounded-2xl p-5 border">
            <h4 className="font-semibold text-gray-800 mb-2">
              Payment Method
            </h4>
            <p className="text-sm text-gray-600">
              Cash on Delivery
            </p>
          </div>

        </div>

        {/* Price Summary */}
        <div className="mt-8 bg-gray-50 rounded-2xl p-5 border space-y-3 text-sm">

          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>$120</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>$10</span>
          </div>

          <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-3">
            <span>Total</span>
            <span>$130</span>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-black transition"
          >
            ← Back to Home
          </Link>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              Download Invoice
            </button>

            <button className="px-6 py-2 rounded-xl bg-primary text-white font-medium hover:bg-secondary transition shadow-md">
              Track Order
            </button>
          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default Your_Order
