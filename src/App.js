import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

function App() {
	return (
		<>
			{/* <UserInfo /> */}
			<UserInfo userId="123" />
			<UserInfo userId="234" />
			<ProductInfo productId="1234" />
		</>
	)
}

export default App;
