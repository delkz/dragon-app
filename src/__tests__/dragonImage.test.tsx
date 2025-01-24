/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import DragonImage from '@/app/components/dragonImage/dragonImage';
import { Dragon } from '@/utils/types/dragon';

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
      return <img {...props} />
    },
}))

describe("Dragon Image", () => {
    const dragon: Dragon = { id: "1", name: 'Test Dragon', type: "Fogo", createdAt: new Date().toISOString() };

    it('renders the dragon image with correct src and alt attributes', () => {
        render(<DragonImage dragon={dragon} />);
        const imgElement = screen.getByAltText('Test Dragon');
        expect(imgElement).toHaveAttribute('src', '/dragonImages/1.png');
        expect(imgElement).toHaveAttribute('alt', 'Test Dragon');
    });

    it('applies the provided className', () => {
        render(<DragonImage dragon={dragon} className="test-class" />);
        const imgElement = screen.getByAltText('Test Dragon');
        expect(imgElement).toHaveClass('test-class');
    });
});