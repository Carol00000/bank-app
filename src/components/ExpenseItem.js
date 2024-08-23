import React from 'react';

const ExpenseItem = (props) => {
    const { id, name, cost, onDelete } = props;

    return (
        <li>
            {name}
            <div>
                <span>
                    ₱{cost}
                    <button onClick={() => onDelete(id)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-trash" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                        Delete
                    </button>
                </span>
            </div>
        </li>
    );
};

export default ExpenseItem;
