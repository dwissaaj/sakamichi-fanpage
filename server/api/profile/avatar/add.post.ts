import { serverSupabaseUser } from '#supabase/server'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {
 
  const user = await serverSupabaseUser(event)
  const userEmail = String(user?.email)
  const body = await readBody(event)
  try {
    await prisma.user.update({
      where: {
        email: userEmail
      },
      data: {
        imgUrl : body?.imgUrl
      }
      
    })
    return setResponseStatus(event, 201, 'Accepted')
  }
  catch (error) {
    return setResponseStatus(event, 404, 'Error')
  }
  
  
})