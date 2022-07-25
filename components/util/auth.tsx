import { getSession } from "next-auth/react";

export function requireAuthentication(gssp:any) {
    return async (context:any) => {
        const { req, res } = context;
        const token = req.cookies.userToken;

        const session = await getSession({req})

        if (!session) {
            // Redirect to login page
            return {
                redirect: {
                    destination: '/login',
                    statusCode: 302
                }
            };
        }

        return await gssp(context); // Continue on to call `getServerSideProps` logic
    }
}