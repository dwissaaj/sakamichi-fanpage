import { serverSupabaseUser } from '#supabase/server'
import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {
  
  const session = await serverSupabaseUser(event)
  const userEmail = session?.email
  try {
    const users = await prisma.profile.findUnique({
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

