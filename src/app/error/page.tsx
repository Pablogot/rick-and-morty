"use client";

import ErrorComponent from "../components/error-component";

export default function Error({ reset }: { reset: () => void }): JSX.Element {
  return (
    <div>
      <ErrorComponent />
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
