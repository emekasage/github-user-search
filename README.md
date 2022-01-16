# Github User Search

Search and view users via the Github API - https://emekasage.github.io/github-user-search/.

## What is this?

A personal project built with React to search users and view their profiles using the Github API.

Feel free to open issues for questions/improvements!

### Libraries and tools

* React
* React Bootstrap

## Running locally

1. Clone the repository
1. Install dependences `yarn`
1. Run the server `yarnpkg run start`
1. Visit `http://localhost:3000/github-user-search/` (note the trailing slash)

### API limit

The Github API has a fairly strict limit (hence the indicator of your remaining
requests in the footer). When running the app locally you can export a [personal
access token](https://api.github.com/users/personal-api-tokens) and this will be
sent along in any API calls to increase the limit:
