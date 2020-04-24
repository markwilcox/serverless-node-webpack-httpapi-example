# Serverless API example

This is an example of using the new AWS API Gateway HTTP APIs with the Serverless Framework. These are:
* Faster
* Cheaper
* Simpler
* Easier to configure Auth
* Have fewer features currently
than the API Gateway REST APIs.

Serverless Framework docs [here][link-official-guide].

This example is for Node.js. It also includes the [serverless-webpack plugin][link-serverless-webpack], which makes it easy to split your code into separate files/modules and use 3rd party dependencies. With serverless webpack you can easily use TypeScript rather than plain JS as well - check their docs to switch over.

If your function is just one file with no dependencies, you can remove the serverless-webpack plugin from serverless.yml and all of the dev dependencies from the package.json.

[link-serverless-webpack]: https://github.com/serverless-heaven/serverless-webpack
[link-official-guide]: https://serverless.com/aws-http-apis/