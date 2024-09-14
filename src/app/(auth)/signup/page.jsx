import React from "react";
import Image from "next/image"; // Import Next.js Image component
import signingup from "./signingup.svg";
import Link from "next/link";

const Signup = () => {
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
          alt="joinus"
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
          Sign up
        </h1>
        {/* Input Fields */}
        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label
            htmlFor="fullname"
            style={{
              display: "block", // Block display for label
              marginBottom: "8px", // Space between label and input
              fontSize: "26px", // Font size of the label
              fontWeight: "700", // Font weight of the label
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
              color: "black", // Color of the label text
            }}
          >
            FullName
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your full name"
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
        {/* "Are you a Creator?" Section */}
        <div style={{ marginBottom: "20px", width: "100%" }}>
          <p
            style={{
              fontSize: "26px", // Font size of the text
              fontWeight: "700", // Font weight of the text
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
              color: "black", // Color of the text
              textAlign: "center", // Center the text
              margin: "20px 0", // Space around the text
            }}
          >
            Are you a Creator?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <button
              style={{
                padding: "12px 20px", // Padding inside the button
                border: "1px solid #ccc", // Border color
                borderRadius: "20px", // Curved corners
                fontSize: "16px", // Font size of the button text
                fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
                backgroundColor: "#f4f4f9", // Background color
                cursor: "pointer", // Pointer cursor on hover
              }}
            >
              Yes
            </button>
            <button
              style={{
                padding: "12px 20px", // Padding inside the button
                border: "1px solid #ccc", // Border color
                borderRadius: "20px", // Curved corners
                fontSize: "16px", // Font size of the button text
                fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
                backgroundColor: "#f4f4f9", // Background color
                cursor: "pointer", // Pointer cursor on hover
              }}
            >
              No
            </button>
          </div>
          <button
            style={{
              padding: "12px 30px", // Adjusted padding to match the combined width of "Yes" and "No" buttons
              border: "1px solid rgba(0, 60, 60, 1)", // Border color
              borderRadius: "20px", // Curved corners
              fontSize: "16px", // Font size of the button text
              fontFamily: "Urbanist, sans-serif", // Apply Urbanist font
              backgroundColor: "transparent", // No background color
              color: "rgba(0, 60, 60, 1)", // Text color
              cursor: "pointer", // Pointer cursor on hover
              width: "auto", // Adjust width to fit content
              marginBottom: "20px", // Space below the button
            }}
          >
            Sign up
          </button>
        </div>
        {/* Login Section */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Urbanist, sans-serif",
              color: "black",
            }}
          >
            Already have an account?
            <Link href="/login">
              <span
                style={{
                  color: "#0070f3", // Color for the login link
                  cursor: "pointer", // Pointer cursor on hover
                  marginLeft: "10px", // Space between text and link
                  fontWeight: "bold", // Bold text for the link
                }}
              >
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
