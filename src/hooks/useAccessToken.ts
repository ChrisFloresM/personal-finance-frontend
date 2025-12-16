import { useAuth0 } from "@auth0/auth0-react";

function useAccessToken() {
  const { getAccessTokenSilently } = useAuth0();

  async function getToken() {
    return await getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        scope: "openid profile email",
      },
    });
  }

  return { getToken };
}

export default useAccessToken;
