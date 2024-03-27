
import  {LoginCheck} from './LoginCheck.tsx'
import { useEffect, useState } from 'react';
export default function Login() {

	const [mode, setMode] = useState('unset');
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("yay");
		
		
		const inputUsername = String(event.target.elements.email.value);
		const inputPassword = String(event.target.elements.password.value);
		
		console.log(inputUsername, inputPassword);
		//validate(inputUsername, inputPassword);
		
	}

	useEffect(() => {
		setMode('login');
	}, []);

	

	return <LoginCheck/>;
	  return (
		<form onSubmit={handleSubmit}>
		  <div>
			<label htmlFor="email">Email</label>
			<input id="email" type="text" />
		  </div>
		  <div>
			<label htmlFor="password">Password</label>
			<input id="password" type="password" />
		  </div>
		  <button type="submit">Submit</button>

		</form>

	  );
	};
