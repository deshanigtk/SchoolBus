Payments = new Mongo.Collection("payments");

PaymentSchema = new SimpleSchema({
    parent_id: {
        type: String,
        label: "Parent ID"
    },
    school_service_id: {
        type: String,
        label: "School Service ID"
    },
    year: {
        type: Number,
        label: "Year"
    },
    month: {
        type: Number,
        label: "Month"
    },
    amount: {
        type: Number,
        label: "Amount"
    },
    status:{
        type:String,
        label:"Status"
    }
});

Payments.attachSchema(PaymentSchema);