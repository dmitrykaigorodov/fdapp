import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { CheckoutPage } from "./CheckoutPage";
import { DashboardPage } from "./DashboardPage";
import { GenerateProxiesPage } from "./GenerateProxiesPage";
import { ZeroBalancePage } from "./ZeroBalancePage";

/*

/dashboard
/buy-proxies
/current-month
/subscription

/proxies/
/proxies/generate
/account
/account/new
/account/change-password
/account/logout
/account/invite

*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/proxies/buy",
    element: <ZeroBalancePage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/proxies/generate",
    element: <GenerateProxiesPage />,
    errorElement: <ErrorBoundary />
  },
]);


function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>
    <h2>Dang!</h2>;
    <pre>
      <strong>{error?.message}</strong>
      {error?.trace}
    </pre>
  </div>
}


export function AppRouter() {
  return <RouterProvider
    router={router}
  />
}