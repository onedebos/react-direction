# react-direction

This is a tiny Custom React hook library that helps you keep track of where exactly a user is when navigating through a predefined list on your page.

For example when using Previous/Next buttons for navigation, you can keep track of what point in a list a user is.

**This library is written in TypeScript and contains type definitions for your use**

[See it on NPM](https://www.npmjs.com/package/react-direction)

# Getting Started

**To get started, follow the instructions below**

- This package depends on the React library.
- install the package `npm install react-direction`
- import it in your app using:

```js
import useDirection from "react-direction";
```

- use it!

```js
const [now, goBack, goForward] = useDirection(5);

return (
  <div>
    <p>{now}</p>
    <button onClick={() => goBack()}>Previous</button>
    <button onClick={() => goForward()}>Next</button>
  </div>
);
```

- Where `5` represents the number of items in your list.

### Test

- Clone this repo
- Run `npm link`
- In the React Application you wish to use this package in, run `npm link react-direction`. Import it as described above for usage and testing.

## Authors

👤 **Adebola Adeniran**

- Github: [@githubhandle](https://github.com/onedebos)
- Twitter: [@twitterhandle](https://twitter.com/debosthefirst)
- Linkedin: [linkedin](https://www.linkedin.com/in/adebola-niran/)
- Web: [Adebola](https://adebola.dev)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

## 📝 License

This project is [MIT](lic.url) licensed.
