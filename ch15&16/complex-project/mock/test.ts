import { MockMethod } from 'vite-plugin-mock';
import { sign, verify } from 'jsonwebtoken';

const secret = 'secret';

export default [
  {
    url: '/api/get',
    method: 'get',
    response: req => {
      console.log(req.headers)
      const token = req.headers['authorization'].split(' ')[1];
      try {
        var decoded: any = verify(token, secret)
        if(decoded.user === 'admin'){
          return {
            code: 200,
            data: decoded.user
          };
        }
        throw new Error('Invalid token')
      } catch(err) {
        return {
          code: 401,
          data: 'Invalid token'
        };
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: (req, res) => {
      const body = req.body;
      if (body.name !== 'admin' || body.password !== '123456') {
        return { code: 403, message: 'Username or password are incorrect.' };
      }

      // 生产jwt，60s后过期，分布式中，可以将这个token存入redis内，校验时从redis中获取，
      // 如key为：user-token
      const token = sign({ user: body.name }, secret, {
        expiresIn: 60
      });

      return {
        code: 200,
        data: token
      };
    }
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise(resolve => {
        req.on('data', chunk => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    }
  }
] as MockMethod[];
