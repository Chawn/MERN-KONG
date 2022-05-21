
## Create client/src/components/FormComponent.js

Kill React Running
`npm install react-router-dom@5.3.0`
`npm start`


## src/index.js
Change `<App />` to `<MyRoute />`

## Create src/MyRoute.js
```
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "./App"
import FormComponent from "./components/FormComponent"

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={FormComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default MyRoute;
```
