"use client";

import ErrorComponent from "../components/error-component";

const Error = ({ reset }: { reset: () => void }): JSX.Element => (
  <div>
    <ErrorComponent />
    <button onClick={() => reset()}>Try again</button>
  </div>
);
export default Error;
