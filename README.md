# next-router-cant-perform-react-state-update

## Usage

```
$ npm install
$ npm run dev
```

## To see the warning

- open the browser devtools console
- go to http://localhost:3000/?tab=tab1
- reload the page
- click the "Tab 2" button
- see the following warning

``` 
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```
