import DragonList from '@/app/components/dragonList/dragonList';
import { render, screen } from '@testing-library/react';


describe('Dragon List', () => {

    it('should display a list of dragons in alphabetical order', () => {
        const dragons = [
            { id: '1', name: 'Zaphira', type: 'Fire' },
            { id: '2', name: 'Alduin', type: 'Dark' },
        ];

        render(<DragonList dragons={dragons} />);
        const dragonNames = screen.getAllByTestId('dragon-name');
        expect(dragonNames.map((d) => d.textContent)).toEqual(['Alduin', 'Zaphira']);
    });

    it('should render a message when there are no dragons', () => {
        render(<DragonList dragons={[]} />);
        const message = screen.getByText(/no dragons available/i);
        expect(message).toBeInTheDocument();
    });



});
