
import { redirect } from "next/navigation"
import { createClient } from "./supabase/server"

export const protectedRoute = async () => {
    
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
}