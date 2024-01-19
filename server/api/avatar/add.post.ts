import { serverSupabaseUser } from '#supabase/server'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {
 
  const user = await serverSupabaseUser(event)
  const userEmail = String(user?.email)
  const body = await readBody(event)
  try {
    const {imgUrl} = await prisma.profile.update({
      where: {
        email: userEmail
      },
      data: {
        imgUrl : body?.imagePublic
      }
      
    })
    return { imgUrl }
  }
  catch (error) {
    return createError({statusCode : 400, message: 'Failed to Fetch'})
  }
  
  
})