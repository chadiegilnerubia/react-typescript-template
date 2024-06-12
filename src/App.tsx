import { setupAxiosInstance } from "./utils/axios-instance"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { PersistLogin } from "./features/persist-login"
function App() {
  setupAxiosInstance(store)
  return (
    <Provider store={store}>
      <PersistLogin />
    </Provider>
  )
}
export default App
