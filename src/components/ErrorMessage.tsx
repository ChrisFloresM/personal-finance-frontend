import type { PropsWithChildren } from "react";

function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className="text-beige-500 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
      {children}
    </p>
  );
}

export default ErrorMessage;
