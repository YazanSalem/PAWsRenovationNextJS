import React from "react";

export default function PasswordForm() {
  return (
    <>
      <h3 className="text-2xl font-light text-center">Confirm Old Password</h3>
      <div>
        <div className="my-3 flex justify-between text-sm">
          <input
            type="password"
            className="border rounded p-2 py-3 w-full"
            placeholder="Confirm Old Password"
          />
        </div>
        <h2 className="text-2xl font-light text-center">Enter New Password</h2>
        <div className="my-3 flex justify-between text-sm">
          <input
            type="password"
            className="border rounded p-2 py-3 w-full"
            placeholder="New Password"
          />
        </div>
        <div className="my-3 flex justify-between text-sm">
          <input
            type="password"
            className="border rounded p-2 py-3 w-full"
            placeholder="Confirm New Password"
          />
        </div>
      </div>
    </>
  );
}
