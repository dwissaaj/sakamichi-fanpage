import { serverSupabaseUser } from '#supabase/server'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {

  const user = await serverSupabaseUser(event)
  const userEmail = String(user?.email)
  const userId = String(user?.id)
  const body = await readBody(event)
  try {
    const users = await prisma.profile.update({
      where: {
        id: userId,
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
    return error
  }
  
  
})