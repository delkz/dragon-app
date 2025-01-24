import SpotDetail from '@/app/components/spotDetail/spotDetail';
import { render, screen } from '@testing-library/react';

describe('Spot Detail', () => {

  it('should display the details of a dragon', async () => {
    const dragon = { id: '1', name: 'Smaug', type: 'Fire', createdAt: '2021-01-01' };
    render(<SpotDetail dragon={dragon} />);

    const name = await screen.findByText(/Smaug/i);
    const type = await screen.findByText(/Fire/i);
    const createdAt = await screen.findByTestId("dragonCreationDate");

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
  });

  it('should display an error message if the dragon is not found', async () => {
    const dragon = undefined;
    render(<SpotDetail dragon={dragon} />);
    
    const errorMessage = await screen.findByText(/Dragon not found/i);
    expect(errorMessage).toBeInTheDocument();
  });

  
  it('should display edit and delete buttons for each dragon', () => {
    const dragon = {id: '1', name: 'Zaphira', type: 'Fire' };

    render(<SpotDetail dragon={dragon} />);
    const editButton = screen.getByTestId('dragonEditButton');
    const deleteButton = screen.getByTestId('dragonDeleteButton');

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
});


});
