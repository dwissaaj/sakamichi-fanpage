import { serverSupabaseUser } from '#supabase/server'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {
  
  const session = await serverSupabaseUser(event)
  const userEmail = String(session?.email)
  try {
    const users = await prisma.user.findUnique({
      where : {
        email: userEmail
      }

    })

    return {users} 
    
  }
  catch (error) {
    throw error
  }
})

