export const useRegister = async (email : string, password: string) => {
    const supabase = useSupabaseClient()
    const redirect = useLoadingIndicator()
    const errMessage = ref()
    const open = ref(false)
    const timerRef = ref(0)
    try {
        const {  error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            emailRedirectTo: 'http://localhost:3000/account'
          }
        });
        
        errMessage.value =  error
        
        if (error) throw createError({statusCode: 400, statusMessage: `${error}`})
        
        if(!error) {
          redirect.isLoading
          errMessage.value =  'Redirect'
          navigateTo('/account')
        }
      }
      catch (error) {
        open.value = false
        window.clearTimeout(timerRef.value)
        timerRef.value = window.setTimeout(() => {
          open.value = true
        }, 100)
        throw createError({statusCode: 400, statusMessage: `${error}`})
      }
 
}