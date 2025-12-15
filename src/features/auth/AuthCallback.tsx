import { useAuth0 } from "@auth0/auth0-react";

function AuthCallback() {
  const { isLoading } = useAuth0();

  if (isLoading) return <p>Signin in... </p>;

  return <div></div>;
}

export default AuthCallback;
