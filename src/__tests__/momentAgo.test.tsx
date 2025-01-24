import React from 'react';
import { render } from '@testing-library/react';
import MomentAgo from '@/app/components/momentAgo/momentAgo';
import { Dragon } from '@/utils/types/dragon';
import getRelativeTime from '@/utils/getRelativeDate';

jest.mock('../utils/getRelativeDate');


describe("Moment Ago", () => {
    it("should render null if createdAt is not provided", () => {
        const data: Dragon = { createdAt: undefined } as Dragon;
        const { container } = render(<MomentAgo data={data} />);
        expect(container.firstChild).toBeNull();
    });

    it("should render the relative time if createdAt is provided", () => {
        const createdAt = new Date().toISOString();
        const data: Dragon = { createdAt } as Dragon;
        (getRelativeTime as jest.Mock).mockReturnValue('há 2 horas');

        const { getByTestId } = render(<MomentAgo data={data} />);
        const element = getByTestId('dragonCreationDate');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('há 2 horas');
        expect(element).toHaveAttribute('data-ref', createdAt);
        expect(element).toHaveAttribute('title', `Criado em ${new Intl.DateTimeFormat("pt-BR").format(new Date(createdAt))}`);
    });
});