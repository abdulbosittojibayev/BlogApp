import React from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import Footer from './components/Footer/Footer.js';
import AllBlogs from './components/AllBlogs/AllBlogs.js';

function App() {
	const allblogs = [
		{
			id: 1,
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			img: 'sneaker.jpg',
			price: '12999',
		},
	]
	return (
		<div className='App'>
			<Navbar />
			<AllBlogs allblogs={allblogs}/>
			<Footer />
		</div>
	)
};

export default App;