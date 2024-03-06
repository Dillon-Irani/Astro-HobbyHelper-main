export default function Login() {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("yay");

		
		const inputUsername = String(event.target.elements.email.value);
		const inputPassword = String(event.target.elements.password.value);
		
		console.log(inputUsername, inputPassword);
	  };
	
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
	

