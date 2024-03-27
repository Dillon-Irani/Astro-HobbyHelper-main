import {getUserInfo, userInfo, isLoggedIn  } from './userInformation';
import { XataClient } from '.././xata.ts';
import bcrypt from "bcrypt";
export default async function validate(username: string, password: string) {
    const inputUsername = username;
    const inputPassword = password;

	const xata = new XataClient({
			apiKey: import.meta.env.XATA_API_KEY,
			branch: import.meta.env.XATA_BRANCH
		  });
		
		  const users = await xata.db.hh_user
          .filter({
        	username: inputUsername,
          })
          .getMany().then(users => {
			console.log(users);
		  });

          if (users.length > 0) {
            const storedPasswordHash = users[0].password;
            const userType = users[0].user_type;
    
            const passwordMatch = await bcrypt.compare(inputPassword, storedPasswordHash);
    
            if (passwordMatch) {
              // Passwords match, handle login logic here
              console.log('Logged in successfully!');
              userInfo.set({username:inputUsername}); 
            } else {
              // Password is incorrect
              console.log('Incorrect password');
            }
          } else {
            // User not found
            console.log('User not found');
          }
          
        }

        