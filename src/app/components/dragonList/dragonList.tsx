import React from 'react'
import DragonDetail from '../dragonDetail/dragonDetail';
import { Dragon } from '@/utils/types/dragon';

type DragonListProps = {
    dragons: Dragon[],
}



const DragonList = ({ dragons }: DragonListProps) => {
    if (dragons.length === 0) {
        return <div>No dragons available</div>;
    }

    return (
        <div>
            {dragons.map((item) => (
                <DragonDetail key={item.id} dragon={item} />
            ))}
        </div>
    );
};

export default DragonList