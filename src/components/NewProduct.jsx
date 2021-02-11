import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newProductAction } from '../actions/productsActions';

const NewProduct = () => {
    const [name, saveName] = useState('');
    const [prize, savePrize] = useState(0);

    const dispatch = useDispatch();
    //Calls action of product action
    const newProduct = product => dispatch(newProductAction(product));

    const submitNewProduct = e => {
        e.preventDefault();
        //Validate form
        if(name.trim() === '' || prize <= 0)
            return;
        //Validate errors
        //Create new product
        newProduct({
            name,
            prize
        });
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header bg-primary text-light">
                        <h2 className="text-center font-weight-bold">
                            Add new product
                        </h2>
                    </div>
                    <div className="card-body">
                        <form
                            onSubmit = {submitNewProduct}
                        >
                            <div className="form-group">
                                <label>
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='e.g.: Orange Juice'
                                    name='Name'
                                    required
                                    value = {name}
                                    onChange = {e => saveName(e.target.value)}
                                />
                                <label>
                                    Product price
                                </label>
                                <input
                                    type="number"
                                    className='form-control'
                                    placeholder='e.g.: 10'
                                    name='Price'
                                    required
                                    value = {prize}
                                    onChange = {e => savePrize(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className='btn btn-danger font-weight-bold text-uppercase d-block w-100'
                            >
                                ADD product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;