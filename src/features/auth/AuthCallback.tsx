import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";

function AuthCallback() {
  const { isLoading } = useAuth0();

  if (isLoading) return <LoadingSpinner />;

  return null;
}

export default AuthCallback;
