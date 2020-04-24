'use strict';
// You can import other files or third party modules here e.g.
// import axios from 'axios';
// import myUtility from './myOtherFile'

// Just fetch environment variables as normal here
//const myEnvVar = process.env.ENV_VAR_NAME;

export const example = async event => {
  // You'll probably want to remove this, but handy to see the
  // format API Gateway passes in when you first deploy and run
  console.log(event);

  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Your function works!'
        },
        null,
        2
      ),
    };
  // You can also return just the body object (stringified)
  // if you always want a 200 status code - if that doesn't
  // work for you make sure the function integration is set
  // to payload v2.0 rather than v1.0. Mine was not.
};
