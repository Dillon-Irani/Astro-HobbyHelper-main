import { XataClient } from '../xataReact.ts';
import { useEffect, useState } from 'react';
export const LoginCheck=async () => {
	const [mode, setMode] = useState('unset');
	
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

	  useEffect(() => {
		setMode('login');
	}, [mode]);
	if (mode === 'login') 
	return <div> yay we did it</div>;
	

	return (
		  <div>
			hello
            </div>	
	  );
}