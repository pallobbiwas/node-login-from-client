import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigated = useNavigate();
  const goToLogin = () => {
    navigated("/ragister");
  };
  return (
    <div className="flex items-center justify-center h-96">
      <div>
        <div class="flex flex-col w-full lg:flex-row">
          <div class="grid flex-grow h-32 card rounded-box place-items-center">
            <h1 className="text-4xl text-red-600">Error</h1>
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="grid flex-grow h-32 card rounded-box place-items-center">
            <p>
              Login failed ! Pease try again <br />
              <button onClick={goToLogin} className="btn btn-sm">
                Go to ragister
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
