import { serverSupabaseUser } from '#supabase/server'
import { useRequestEvent } from 'nuxt/app'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {
 
  const user = await serverSupabaseUser(event)
  const userEmail = String(user?.email)
  const body = await readBody(event)
  const events = useRequestEvent()
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
    return setResponseStatus(events, 201, 'Accepted')
  }
  catch (error) {
    return setResponseStatus(events, 404, 'Error')
  }
  
  
})