import React from 'react';

const NewProduct = () => {
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
                        <form action="">
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