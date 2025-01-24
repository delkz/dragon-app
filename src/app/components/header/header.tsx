import { logoff } from '@/app/login/actions';
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';
import style from './style.module.scss';

const Header = async () => {

    const supabase = await createClient();
    const { data } = await supabase.auth.getUser()

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.flex}>
                 
                    <Link href={"/"}>
                        <h1 className={style.title}>Dragon<span>Pedia</span></h1>
                    </Link>
                    
                    {data?.user &&  <div className={`${style.buttonList} ${style.flex}`}>
                        <button className={style.button} onClick={logoff}>Sair</button>
                        <Link className={`${style.button } ${style.buttonPrimary}`} href="/dragon/create">Criar novo</Link>
                    </div>}
                </div>
            </div>
        </header>
    )

}

export default Header;