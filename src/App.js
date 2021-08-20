import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "../src/stores";
import AppRoutes from "./router";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
