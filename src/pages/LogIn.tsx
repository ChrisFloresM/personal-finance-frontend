import { useAuth0 } from "@auth0/auth0-react";

function LogIn() {
  const { loginWithRedirect } = useAuth0();

  function handleLogin() {
    loginWithRedirect({ appState: { returnTo: "/overview" } });
  }

  return (
    <div className="align-center flex h-dvh bg-[#F2F3F7]">
      {/* Logo for mobile devices */}
      <div className="fixed top-0 w-full rounded-b-lg bg-black px-500 py-300 lg:hidden">
        <img
          className="m-auto"
          src="/logo-large.svg"
          alt="logo of the application"
        />
      </div>

      {/* Side-image for desktop+ devices*/}
      <div className="hidden w-[42%] max-w-[560px] p-250 lg:block">
        <div className="flex h-full w-full flex-col items-start justify-between rounded-lg bg-[url(/illustration-authentication.svg)] bg-cover p-500">
          <div>
            <img
              className="m-auto"
              src="/logo-large.svg"
              alt="logo of the application"
            />
          </div>
          <div className="space-y-300 text-white">
            <h1 className="text-preset-1 leading-preset-1 font-bold">
              Keep track of your money and save for your future
            </h1>
            <p className="text-preset-4 leading-preset-4">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>

      {/* General content for all devices */}
      <div className="flex flex-1 items-center justify-center px-500 py-400">
        <div className="space-y-300">
          <h2 className="bold text-preset-1 leading-preset-1 text-center uppercase">
            Get started!
          </h2>
          <p className="text-center">
            Login to your account and recover control over your finances
          </p>
          <button
            className="text-preset-4 leading-preset-4 bg-grey-900 hover:bg-grey-500 w-full cursor-pointer rounded-lg p-200 font-bold text-white transition-colors duration-200"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
