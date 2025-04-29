import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./components/store/store.jsx";
createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>

  </ChakraProvider>
);
