import React, { useState, useEffect } from 'react';
import { authenticate, getUsername } from '../services/authorize';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

const LoginComponent = props => {
	const [state, setState] = useState({
		username: '',
		password: '',
	});
	const { username, password } = state;

	// กำหนดค่าให้ State
	const inputValue = name => event => {
		setState({ ...state, [name]: event.target.value });
	};

	const submitForm = event => {
		event.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API}/login`, {
				username,
				password,
			})
			.then(res => {
				authenticate(res, ()=>props.history.push('/create'));
				// setTimeout(() => {
				// 	window.location.href = '/create';
				// }, 1000);
			})
			.catch(err => {
				console.log(err);
				Swal.fire({
					icon: 'error',
					title: err.response.data.message,
				});
			});
		// console.table({username, password})
	};

	useEffect(() => {
		getUsername() && props.history.push('/');
	}, []);


	return (
		<div className='container p-5'>
			<NavbarComponent />
			<h1>เข้าสู่ระบบ</h1>
			<form action='' onSubmit={submitForm}>
				<div className='form-group'>
					<label htmlFor=''>Username</label>
					<input
						type='text'
						className='form-control'
						value={username}
						onChange={inputValue('username')}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor=''>Password</label>
					<input
						type='password'
						className='form-control'
						value={password}
						onChange={inputValue('password')}
					/>
				</div>
				<br />
				<input type='submit' value='บันทึก' className='btn btn-primary' />
			</form>
			<br />
			<code>
				<pre>{JSON.stringify(state, null, 1)}</pre>
			</code>
		</div>
	);
};

export default withRouter(LoginComponent);
