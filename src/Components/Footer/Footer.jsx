import * as React from "react";
import './Footer.css';

export class Footer extends React.Component {
    render() {
        const {currentPage, onPageChange} = this.props;

        return (
            <footer className="footerButtonPage">
                <button className="btn btn-primary" onClick={() => onPageChange(currentPage - 1)}>Prev</button>
                <button className="btn btn-primary" onClick={() => onPageChange(currentPage + 1)}>Next</button>
            </footer>
        )
    }
}