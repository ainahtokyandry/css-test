import { BrowserRouter, Routes, Route } from "react-router-dom";
import Empty from "./pages/Empty";
import HomePage from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/empty" element={<Empty />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
