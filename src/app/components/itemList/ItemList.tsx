import React from 'react'
import DragonDetail from '../spotDetail/spotDetail';
import { Dragon } from '@/utils/types/dragon';
import style from './style.module.scss';

type ItemListProps = {
    dragons: Dragon[],
}



const ItemList = ({ dragons }: ItemListProps) => {
    if (dragons.length === 0) {
        return <div>No dragons available</div>;
    }

    return (
        <div className={style.dragonList}>
            {dragons.sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                <DragonDetail key={item.id} dragon={item} />
            ))}
        </div>
    );
};

export default ItemList