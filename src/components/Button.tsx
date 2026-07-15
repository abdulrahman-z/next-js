"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button disabled={pending}>Submit</button>
    </div>
  );
}
