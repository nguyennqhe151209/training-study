import {inject} from '@loopback/core';
import {
  get, Request, response,
  ResponseObject, RestBindings
} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */
const TEST_RESPONSE: ResponseObject = {
  description: 'Test Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'TestResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class TestController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  // Map to `GET /ping`
  @get('/test')
  @response(200, TEST_RESPONSE)
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      name: "Nguyen"
    }
  }
}
