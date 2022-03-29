import Cors from 'cors'

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export function initMiddleware(middleware:any) {
  return (req:any, res:any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result:any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req:any, res:any) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}