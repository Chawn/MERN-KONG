import axios from 'axios';
import { useEffect, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';

function App() {
	const [blogs, setBlogs] = useState({});
	const [notfound, setNotfound] = useState('');

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}/blogs`).then(res => {
			setBlogs(res);
		}).catch(err => {
      setNotfound(err.response.data.message);
    });
	}, []);

	return (
		<div className='container p-5'>
			<NavbarComponent />

			<h1>Home</h1>
      {notfound !='' && <p>{notfound}</p>}
			<pre>{JSON.stringify(blogs)}</pre>
		</div>
	);
}

export default App;
