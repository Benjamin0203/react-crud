## React + Axios Practice

---
follow instruction from [this link](https://www.bezkoder.com/react-hooks-crud-axios-api/)


## main page
[main page](./docs/main-page.png)


## Setup
`npm install`

`npm start`

on localhost 8081

## Issue History[Fixed]:

### on delete: unable to delete single tutorial:
~~error message:
`
Tutorial.js:78 
AxiosError {message: 'Request failed with status code 500', name: 'AxiosError', code: 'ERR_BAD_RESPONSE', config: {…}, request: XMLHttpRequest, …}
code
: 
"ERR_BAD_RESPONSE"
config
: 
{transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
message
: 
"Request failed with status code 500"
name
: 
"AxiosError"
request
: 
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
response
: 
{data: {…}, status: 500, statusText: 'Internal Server Error', headers: AxiosHeaders, config: {…}, …}
stack
: 
"AxiosError: Request failed with status code 500\n    at settle (http://localhost:8081/static/js/bundle.js:45263:12)\n    at XMLHttpRequest.onloadend (http://localhost:8081/static/js/bundle.js:43974:66)"
[[Prototype]]
: 
Error`~~

### update
~~able to update but still get error message from `app/controllers/tutorial.controller.js` in react-bezkoder folder (back-end)~~