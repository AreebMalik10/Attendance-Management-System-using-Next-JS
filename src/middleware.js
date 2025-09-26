export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/matcher']  // update the path from /matcher to /dashboard
}