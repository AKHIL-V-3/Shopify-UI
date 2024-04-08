import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import "./index.css"

export default function TableData() {
    

const initialData = [
    {
        "Orders": "#1203",
        "Date": "2022/04/08",
        "Customer": "John Doe",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "100.50"
    },
    {
        "Orders": "#1202",
        "Date": "2022/04/09",
        "Customer": "Jane Smith",
        "PaymentStatus": "Refunded",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "150.00"
    },
    {
        "Orders": "#1200",
        "Date": "2022/04/10",
        "Customer": "Alex Johnson",
        "PaymentStatus": "Pending",
        "fulfillmentStatus": "Fulfilled",
        "Total": "200.00"
    },
    {
        "Orders": "#1201",
        "Date": "2022/04/11",
        "Customer": "Michael Brown",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Fulfilled",
        "Total": "120.00"
    },
    {
        "Orders": "#1204",
        "Date": "2022/04/12",
        "Customer": "Sarah Wilson",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "180.00"
    },
    {
        "Orders": "#1205",
        "Date": "2022/04/13",
        "Customer": "Emily Davis",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "90.00"
    },
    {
        "Orders": "#1206",
        "Date": "2022/04/14",
        "Customer": "David Garcia",
        "PaymentStatus": "Pending",
        "fulfillmentStatus": "Fulfilled",
        "Total": "300.00"
    },
    {
        "Orders": "#1207",
        "Date": "2022/04/15",
        "Customer": "Maria Rodriguez",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "250.00"
    },
    {
        "Orders": "#1208",
        "Date": "2022/04/16",
        "Customer": "James Martinez",
        "PaymentStatus": "Pending",
        "fulfillmentStatus": "Fulfilled",
        "Total": "150.00"
    },
    {
        "Orders": "#1209",
        "Date": "2022/04/17",
        "Customer": "Anna Hernandez",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "210.00"
    },
    {
        "Orders": "#1210",
        "Date": "2022/04/18",
        "Customer": "John Doe",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "100.50"
    },
    {
        "Orders": "#1211",
        "Date": "2022/04/19",
        "Customer": "Jane Smith",
        "PaymentStatus": "Refunded",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "150.00"
    },
    {
        "Orders": "#1212",
        "Date": "2022/04/20",
        "Customer": "Alex Johnson",
        "PaymentStatus": "Pending",
        "fulfillmentStatus": "Fulfilled",
        "Total": "200.00"
    },
    {
        "Orders": "#1213",
        "Date": "2022/04/21",
        "Customer": "Michael Brown",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Fulfilled",
        "Total": "120.00"
    },
    {
        "Orders": "#1214",
        "Date": "2022/04/22",
        "Customer": "Sarah Wilson",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "180.00"
    },
    {
        "Orders": "#1215",
        "Date": "2022/04/23",
        "Customer": "Emily Davis",
        "PaymentStatus": "Paid",
        "fulfillmentStatus": "Unfulfilled",
        "Total": "90.00"
    }
]


    const [products, setProducts] = useState(initialData);
    const [first, setFirst] = useState(0);
    const rows = 10; 

    const onPageChange = (event) => {
        setFirst(event.first);
    };

    return (
        <div className="card custom-table">
            <DataTable value={products.slice(first, first + rows)}>
                <Column key="checkbox" selectionMode="multiple" style={{ width: '2rem', borderBottom: '1px solid #ccc', borderRadius: '0.375rem', height: '3rem' }} headerClassName="header-class" />
                <Column
                    field="Orders"
                    header="Orders"
                    headerClassName="header-class"
                    bodyClassName="body-class"
                    rowClassName="row-class"
                    body={(rowData) => (
                        <span style={{ color: 'blue' }}>{rowData.Orders}</span>
                    )}
                    style={{ borderBottom: '1px solid #ccc' }}
                />

                <Column field="Date" header="Date" headerClassName="header-class" bodyClassName="body-class" rowClassName="row-class" style={{ borderBottom: '1px solid #ccc' }} />
                <Column field="Customer" header="Customer" headerClassName="header-class" bodyClassName="body-class" rowClassName="row-class" style={{ borderBottom: '1px solid #ccc' }} />
                <Column
                    key="PaymentStatus"
                    field="PaymentStatus"
                    header="Payment Status"
                    headerClassName="header-class"
                    body={(rowData) => (
                        <span className={`payment-status ${rowData.PaymentStatus.toLowerCase()}`}>
                            <span
                                className="badge"
                                style={{
                                    backgroundColor: rowData.PaymentStatus === 'Paid' ? '#9FE2BF' : '#f0f0f0',
                                    color: rowData.PaymentStatus === 'Paid' ? '#006400' : '#666',
                                    borderRadius: '15px',
                                    padding: '5px 10px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {rowData.PaymentStatus}
                            </span>
                        </span>
                    )}
                    style={{ borderBottom: '1px solid #ccc' }}
                />

                <Column
                    key="fulfillmentStatus"
                    field="fulfillmentStatus"
                    header="Fulfillment Status"
                    headerClassName="header-class"
                    body={(rowData) => (
                        <span className={`fulfillment-status ${rowData.fulfillmentStatus.toLowerCase()}`}>
                            <span
                                className="badge"
                                style={{
                                    backgroundColor: rowData.fulfillmentStatus === 'Fulfilled' ? '#9FE2BF' : '#f0f0f0',
                                    color: rowData.fulfillmentStatus === 'Fulfilled' ? '#006400' : '#666',
                                    borderRadius: '15px',
                                    padding: '5px 10px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {rowData.fulfillmentStatus}
                            </span>
                        </span>
                    )}
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Column field="Total" header="Total" headerClassName="header-class" bodyClassName="body-class" rowClassName="row-class" style={{ borderBottom: '1px solid #ccc' }} />
            </DataTable>
            <Paginator first={first} rows={rows} totalRecords={products.length} onPageChange={onPageChange} />
        </div>
    );
}

























// const initialData = [
//     {
//         "Orders": "ORD123",
//         "Date": "2022/04/08",
//         "Customer": "John Doe",
//         "PaymentStatus": "Paid",
//         "fulfillmentStatus": "Unfulfilled",
//         "Total": "100.50"
//     },
//     {
//         "Orders": "ORD124",
//         "Date": "2022/04/09",
//         "Customer": "Jane Smith",
//         "PaymentStatus": "Paid",
//         "fulfillmentStatus": "Unfulfilled",
//         "Total": "150.00"
//     },
//     {
//         "Orders": "ORD125",
//         "Date": "2022/04/10",
//         "Customer": "Alex Johnson",
//         "PaymentStatus": "Pending",
//         "fulfillmentStatus": "Fulfilled",
//         "Total": "200.00"
//     },
//     {
//         "Orders": "ORD126",
//         "Date": "2022/04/11",
//         "Customer": "Michael Brown",
//         "PaymentStatus": "Pending",
//         "fulfillmentStatus": "Fulfilled",
//         "Total": "120.00"
//     },
//     {
//         "Orders": "ORD127",
//         "Date": "2022/04/12",
//         "Customer": "Sarah Wilson",
//         "PaymentStatus": "Paid",
//         "fulfillmentStatus": "Unfulfilled",
//         "Total": "180.00"
//     },
//     {
//         "Orders": "ORD128",
//         "Date": "2022/04/13",
//         "Customer": "Emily Davis",
//         "PaymentStatus": "Paid",
//         "fulfillmentStatus": "Unfulfilled",
//         "Total": "90.00"
//     },
//     {
//         "Orders": "ORD129",
//         "Date": "2022/04/14",
//         "Customer": "David Garcia",
//         "PaymentStatus": "Pending",
//         "fulfillmentStatus": "Fulfilled",
//         "Total": "300.00"
//     },
//     {
//         "Orders": "ORD130",
//         "Date": "2022/04/15",
//         "Customer": "Maria Rodriguez",
//         "PaymentStatus": "Paid",
//         "fulfillmentStatus": "Unfulfilled",
//         "Total": "250.00"
//     },
//     {
//         "Orders": "ORD131",
//         "Date": "2022/04/16",
//         "Customer": "James Martinez",
//         "PaymentStatus": "Pending",
//         "fulfillmentStatus": "Fulfilled",
//         "Total": "150.00"
//     },
//     {
//         "Orders": "ORD132",
//         "Date": "2022/04/17",
//         "Customer": "Anna Hernandez",
//         "PaymentStatus": "Paid",
//         "fulfillmentStatus": "Unfulfilled",
//         "Total": "210.00"
//     }
// ]