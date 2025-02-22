import ReactDOM from "react-dom/client";
import store from "./store";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
