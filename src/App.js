
import SideBar from "./component/ui component/Sidebar/sidebar";
import Header from "./component/ui component/Header/header";
import Body from "./component/ui component/Body/body";
import PutAllTogether from "./component/ui component/allTogether";
import { Provider } from "react-redux";
import store from "./redux-store/store";
function App() {
  return (
    <Provider store={store}>
      <PutAllTogether />
    </Provider>
  );
}

export default App;
