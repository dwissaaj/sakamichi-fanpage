import { serverSupabaseUser } from '#supabase/server'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {
 
  const user = await serverSupabaseUser(event)
  const userId = String(user?.id)
  const body = await readBody(event)
  try {
     await prisma.profile.update({
      where: {
        id: userId
      },
      data: {
        imgUrl : body?.publicImage
      }
      
    })
    return 'Success'
  }
  catch (error) {
    return createError({statusCode : 400, message: 'Failed to Fetch'})
  }
  
  
})