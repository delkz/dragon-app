import { logoff } from '@/app/login/actions';
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';
const Header = async () => {

    const supabase = await createClient();
    const { data } = await supabase.auth.getUser()

    return (
        <header>
            <div className="container">
                <h1><Link href={"/"}>DragonPedia</Link></h1>

                {data?.user && <div>
                    <button onClick={logoff}>Sair</button>
                    <Link href="/dragon/create">Criar novo</Link>
                </div>}
            </div>
        </header>
    )

}

export default Header;