import React from "react";
import './TableHeaderCell.css';
import * as classNames from 'classnames';

export const TableHeaderCell = (props) => {
    const {order, title} = props;

    let arrowUpClassName = classNames(
        'fa',
        'fa-sort-up',
        'table-header-cell__arrow',
        {
            'table-header-cell__arrow_active': order === 'asc'
        });

    let arrowDownClassName = classNames('fas fa-sort-down table-header-cell__arrow', {
        'table-header-cell__arrow_active': order === 'desc'
    });

    return (
        <td>
            <div className="table-header-cell">
                <span className="table-header-cell__title">{title}</span>

                <div className="table-header-cell__arrows">
                    <i className={arrowUpClassName}/>
                    <i className={arrowDownClassName}/>
                </div>
            </div>
        </td>
    );
};