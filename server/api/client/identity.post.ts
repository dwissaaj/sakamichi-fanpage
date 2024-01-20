import prisma from '~/middleware/db'
export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  try {
    const users = await prisma.profile.create({
      data: {
        id: body?.id,
        email: body?.email,
      }
      
    })
    return {users}
  }
  catch (error) {
    return error
  }
  
  
})