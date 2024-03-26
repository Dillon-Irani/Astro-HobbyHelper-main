import {getUserInfo, userInfo, isLoggedIn  } from './userInformation';
import { XataClient } from '.././xata.ts';
export default async function Login() {

	
	const xata = new XataClient({
			apiKey: import.meta.env.XATA_API_KEY,
			branch: import.meta.env.XATA_BRANCH
		  });
		
		  const users = await xata.db.hh_user
          .filter({
        	username: 'Admin',
          })
          .getMany().then(users => {
			console.log(users);
		  });
  
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("yay");
		
		
		const inputUsername = String(event.target.elements.email.value);
		const inputPassword = String(event.target.elements.password.value);
		
		console.log(inputUsername, inputPassword);
		
		userInfo.set({username:inputUsername, password:inputPassword}); 
		
		console.log(userInfo.get());
	}
	
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
