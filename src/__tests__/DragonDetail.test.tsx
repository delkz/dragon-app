import DragonDetail from '@/app/components/dragonDetail/dragonDetail';
import DragonDetailDelete from '@/app/components/dragonDetail/dragonDetailDelete';
import DragonDetailEdit from '@/app/components/dragonDetail/dragonDetailEdit';
import { fireEvent, render, screen } from '@testing-library/react';


describe('Dragon Detail', () => {

  it('should display the details of a dragon', async () => {
    const dragon = { id: '1', name: 'Smaug', type: 'Fire', createdAt: '2021-01-01' };
    render(<DragonDetail dragon={dragon} />);

    const name = await screen.findByText(/Smaug/i);
    const type = await screen.findByText(/Fire/i);
    const createdAt = await screen.findByText(/2021-01-01/i);

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
  });

  it('should display an error message if the dragon is not found', async () => {
    const dragon = undefined;
    render(<DragonDetail dragon={dragon} />);
    
    const errorMessage = await screen.findByText(/Dragon not found/i);
    expect(errorMessage).toBeInTheDocument();
  });

  
  it('should display edit and delete buttons for each dragon', () => {
    const dragon = {id: '1', name: 'Zaphira', type: 'Fire' };

    render(<DragonDetail dragon={dragon} />);
    const editButton = screen.getByRole('button', { name: /edit/i });
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
});


  it('should call the delete function when the delete button is clicked', () => {
    const deleteDragon = jest.fn();

    render(<DragonDetailDelete deleteDragon={deleteDragon} />);
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    expect(deleteDragon).toHaveBeenCalledWith('1');
  });

  it('should call the edit function when the edit button is clicked', () => {
    const editDragon = jest.fn();

    render(<DragonDetailEdit editDragon={editDragon} />);
    
    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);
    
    expect(editDragon).toHaveBeenCalledWith('1');
  });

});
