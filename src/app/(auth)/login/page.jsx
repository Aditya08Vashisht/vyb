// components/Login.js

import React from "react";
import Image from "next/image"; // Import Next.js Image component
import signingup from "../signup/signingup.svg"; // Adjust the path if needed
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex relative items-center">
      <div
        style={{
          position: "relative", // Ensure the container is positioned relative
          left: "-300px", // Adjust this value to move the image left
          width: "500px", // Adjust width as needed
          height: "400px", // Adjust height as needed
          top: "200px",
        }}
      >
        <Image
          src={signingup} // Path relative to the `public` folder
          alt="login"
          layout="responsive" // Maintain aspect ratio while resizing
          width={500} // Updated width
          height={400} // Updated height
          className="object-contain"
        />
      </div>
      {/* White Bar with Heading and Input Fields */}
      <div
        style={{
          position: "absolute", // Position the bar absolutely within the parent
          left: "350px", // Shift the bar further to the right
          top: "150px", // Align with the top of the image
          width: "500px", // Width of the white bar (same as the image width)
          height: "auto", // Adjust height to fit content
          backgroundColor: "rgb(244, 244, 249 / var(--tw-bg-opacity))", // Updated background color
          display: "flex", // Use flexbox for layout
          flexDirection: "column", // Stack content vertically
          padding: "20px", // Add padding to the bar
          alignItems: "center", // Center items horizontally
        }}
      >
        <h1
          style={{
            fontSize: "26px", // Font size of the heading
            fontWeight: "700", // Font weight of the heading
            margin: "10px 0 35px 0", // Margin to space out from the top
            color: "black", // Color of the heading text
            fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
            textAlign: "center", // Center the heading text
            width: "100%", // Ensure heading takes full width for centering
          }}
        >
          Login
        </h1>
        {/* Email Input Field */}
        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label
            htmlFor="email"
            style={{
              display: "block", // Block display for label
              marginBottom: "8px", // Space between label and input
              fontSize: "26px", // Font size of the label
              fontWeight: "700", // Font weight of the label
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
              color: "black", // Color of the label text
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={{
              width: "100%", // Full width of the container
              padding: "12px", // Padding inside the input
              border: "1px solid #ccc", // Small border color
              borderRadius: "20px", // Rounded corners
              fontSize: "16px", // Font size of the input text
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
            }}
          />
        </div>
        {/* Password Input Field */}
        <div style={{ width: "100%" }}>
          <label
            htmlFor="password"
            style={{
              display: "block", // Block display for label
              marginBottom: "8px", // Space between label and input
              fontSize: "26px", // Font size of the label
              fontWeight: "700", // Font weight of the label
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
              color: "black", // Color of the label text
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            style={{
              width: "100%", // Full width of the container
              padding: "12px", // Padding inside the input
              border: "1px solid #ccc", // Small border color
              borderRadius: "20px", // Rounded corners
              fontSize: "16px", // Font size of the input text
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
            }}
          />
        </div>
        {/* Login Button */}
        <button
          style={{
            padding: "12px 70px", // Padding inside the button
            border: "1px solid rgba(0, 60, 60, 1)", // Border color
            borderRadius: "20px", // Curved corners
            fontSize: "16px", // Font size of the button text
            fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
            backgroundColor: "transparent", // No background color
            color: "rgba(0, 60, 60, 1)", // Text color
            cursor: "pointer", // Pointer cursor on hover
            display: "block", // Block display to center it
            marginTop: "20px", // Space above the button
            marginLeft: "auto", // Center the button horizontally
            marginRight: "auto", // Center the button horizontally
          }}
        >
          Login
        </button>
        {/* Text with "Login" link */}
        <div
          style={{ marginTop: "20px", display: "flex", alignItems: "center" }}
        >
          <span
            style={{
              fontSize: "16px",
              color: "black",
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            Don't have an account?
          </span>
          <Link
            href="/signup"
            style={{
              marginLeft: "5px", // Space between text and link
              color: "rgba(0, 60, 60, 1)", // Link color
              fontWeight: "700", // Bold the link
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
              cursor: "pointer", // Pointer cursor on hover
            }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
