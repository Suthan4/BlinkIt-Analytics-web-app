import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layouts/rootLayout";
import QuickCommece from "../features/quickCommerce/pages/quickCommece";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: QuickCommece,
      },
    ],
  },
]);
