import React from 'react';
import {getInvoices} from "../data/Data";
import {Link} from "react-router-dom";

const Invoices = () => {
    let invoices = getInvoices()
    return (
        <div style={{display: "flex"}}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {invoices.map((invoice) => (
                    <Link
                        style={{display: "block", margin: "1rem 0"}}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </Link>

                ))}

            </nav>
        </div>
    )
}

export default Invoices;