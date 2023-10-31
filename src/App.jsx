import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import { AddItem, Home, Layout, List } from './views';
import { useShoppingListData } from './api';
import { useStateWithStorage } from './utils';
import { generateToken } from '@the-collab-lab/shopping-list-utils';

export function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [listToken, setListToken] = useStateWithStorage(
		'tcl-shopping-list-token',
		null,
	);

	const handleNewToken = () => {
		setListToken(generateToken());
	};

	const data = useShoppingListData(listToken);

	useEffect(() => {
		// Assuming the token retrieval is asynchronous and can be awaited
		const initializeApp = async () => {
			try {
				// Simulate an asynchronous operation if needed
				await new Promise((resolve) => setTimeout(resolve, 1000)); // Optional delay for demonstration
			} catch (error) {
				console.error('Error during initialization:', error);
			} finally {
				setIsLoading(false);
			}
		};

		initializeApp();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>; // Placeholder for a loading indicator
	}

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout listToken={listToken} />}>
					<Route
						index
						element={
							<Home
								listToken={listToken}
								setListToken={setListToken}
								handleNewToken={handleNewToken}
							/>
						}
					/>
					<Route
						path="/list"
						element={
							listToken ? (
								<List data={data} listToken={listToken} />
							) : (
								<Navigate replace to="/" />
							)
						}
					/>
					<Route
						path="/add-item"
						element={
							listToken ? (
								<AddItem listToken={listToken} data={data} />
							) : (
								<Navigate replace to="/" />
							)
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
}
