### Features
- Login with Google Provider
- Logout from the account
- If first login (not registered) it creates an account


####How to install it?
`$ npm install`

Type it in the main folder, where package.json is located

####Connect it with your FireBase　
Search for /src/firebase.js
Here define these values 

```javascript
const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "AUTH DOMAIN",
  projectId: "PROJECT ID",
  storageBucket: "STORAGE BUCKET",
  messagingSenderId: "MESSAGING SENDER ID",
  appId: "YOUR APP ID"
};
```
####Changed? Great! Here is how to start it:
`$ npm start`

######Found any problem while installing packages? Try this one:
`$ npm audit fix`

In rare cases you might want to force it. 

`$ npm audit fix --force`
