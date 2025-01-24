import ItemList from '@/app/components/itemList/ItemList';
import { render, screen } from '@testing-library/react';


describe('Item List', () => {

    it('should display a list of dragons in alphabetical order', () => {
        const dragons = [
            { id: '1', name: 'Zaphira', type: 'Fire' },
            { id: '2', name: 'Alduin', type: 'Dark' },
        ];

        render(<ItemList dragons={dragons} />);
        const dragonNames = screen.getAllByTestId('dragonName');
        expect(dragonNames.map((d) => d.textContent)).toEqual(['Alduin', 'Zaphira']);
    });

    it('should render a message when there are no dragons', () => {
        render(<ItemList dragons={[]} />);
        const message = screen.getByText(/no dragons available/i);
        expect(message).toBeInTheDocument();
    });



});
