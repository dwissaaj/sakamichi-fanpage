import { serverSupabaseUser } from '#supabase/server'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  const userEmail = String(user?.email)
  const body = await readBody(event)
  try {
    const users = await prisma.user.update({
      where: {
        email: userEmail
      },
      data: {
        name: body?.name,
        country: body?.country,
        oshimen:  body?.oshimen
      }
      
    })
    return {users}
  }
  catch (error) {
    return createError({statusCode: 404, statusMessage: `Something is error ${error}`})
  }
  
  
})