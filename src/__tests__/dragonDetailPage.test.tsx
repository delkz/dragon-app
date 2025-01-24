import React from 'react';
import { render, screen } from '@testing-library/react';
import DragonDetailPage from '@/app/dragon/[id]/details';
import '@testing-library/jest-dom'

describe('DragonDetailPage', () => {

    it('should render the dragon name', () => {
        const dragon = { id: '1', name: 'Smaug', type: 'Fire' };
        render(<DragonDetailPage dragonData={dragon} />);
        expect(screen.getByText('Smaug')).toBeInTheDocument();
    });

    it('should render the dragon type', () => {
        const dragon = { id: '1', name: 'Smaug', type: 'Fire' };
        render(<DragonDetailPage dragonData={dragon} />);
        expect(screen.getByText('Fire')).toBeInTheDocument();
    });

    it('should render a message if no dragon data is provided', () => {
        render(<DragonDetailPage dragonData={null} />);
        expect(screen.getByTestId("noDragonFound")).toBeInTheDocument();
    });
});