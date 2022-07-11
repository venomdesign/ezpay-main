export interface ChartType {
    series?: any;
    plotOptions?: any;
    stroke?: any;
    dataLabels?: any;
    chart?: any;
    legend?: any;
    colors?: any;
    labels?: any;
}

export interface Stat {
    title: string;
    icon: string;
    value: string;
}

export interface Chat {
    id?: number;
    name?: string;
    message?: string;
    image?: string;
    time?: string;
    align?: string;
    text?: string;
}

export interface Transaction {
    type: string;
    orderid: string;
    date: string;
    billingname: string;
    total: string;
    paymentstatus: string;
    paymentlink: string;
    paymenthref: string;
}
