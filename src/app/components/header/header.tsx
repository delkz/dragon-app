import { logoff } from '@/app/login/actions';
import { createClient } from '@/utils/supabase/server'
const Header = async ()=>{

    const supabase = await createClient();
    const { data } = await supabase.auth.getUser()
    
    return (
        <header>
            <h1>Header</h1>

            { data?.user && <button onClick={logoff}>Sair</button> }

           
        </header>
        )
    
    
}

export default Header;