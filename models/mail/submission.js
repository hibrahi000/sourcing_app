const disclaimerMessage = ` The information contained in this communication is confidential, may be privileged and is intended for the exclusive use of the above named addressee(s). If you are not the intended recipient(s), you are expressly prohibited from copying, distributing, disseminating, or in any other way using any information contained within this communication. If you have received this communication in error please contact the sender by telephone or by response via mail. We have taken precautions to minimize the risk of transmitting software viruses, but we advise you to carry out your own virus checks on any attachment to this message. We cannot accept liability for any loss or damage caused by software virus. <br>
Located At: 131 Heartland Boulevard, Edgewood, New York, U.S Phone:866-282-4729 `


exports.vendorSubmission = (props) => {
	return {
        from: `${props.vendorName} <${props.vendorMainEmail}>`, 
        to: props.staffMainEmail,
        cc: props.staffCcEmail, // list of receivers
        subject: props.subject,
        html: `
                    NEW MATERIAL: ${props.NewMaterial} <br>
                    Response from vendor: ${props.vendorName}<br><br>
                    Material: ${props.material}<br>
                    ABH Requested: ${props.RequestedAmount}<br><br>
                    Item Code: ${props.itemCode} <br>
                    Min Order Quantity: ${props.amount}  ${props.measurement}<br>
                    Price: ${props.priceIn} USD  ---- ${props.priceType}<br>
                    In Stock : ${props.InStock}<br>
                    Date In Stock: ${props.DateInStock}<br><br><br><br>


                    Payment Type: ${props.payType}<br>
                    Payment Terms: ${props.payTerms}<br>
                    Shipping Date ${props.shippingDate}<br><br><br>




                    Shipping Company : <br>
                    Company Name: ${props.shipCompName}<br>
                    Address 1: ${props.shipAddress1}<br>
                    Address 2: ${props.shipAddress2}<br>
                    City ${props.shipCity}<br>
                    State: ${props.shipState}<br>
                    Zip: ${props.shipZip}<br>

                    Notes left by ${props.vendorName} : <br> ${props.notes}.



                    <br><br>
                    ${disclaimerMessage}
                    `
    };
}

exports.TEST_vendorSubmission = (props) => {
	return {
        from: `${props.vendorName} <${props.vendorMainEmail}>`, // sender address Purchasing@abhnature.com
        to: props.testEmail,
        // cc: props.ccEmail, // list of receivers
        subject: 'This is a test Email: VENDOR SUBMISSION',
        html: `
                    NEW MATERIAL: ${props.NewMaterial} <br>
                    Response from vendor: ${props.vendorName}<br><br>
                    Material: ${props.material}<br>
                    ABH Requested: ${props.RequestedAmount}<br><br>
                    Item Code: ${props.itemCode} <br>
                    Min Order Quantity: ${props.amount}  ${props.measurement}<br>
                    Price: ${props.priceIn} USD  ---- ${props.priceType}<br>
                    In Stock : ${props.InStock}<br>
                    Date In Stock: ${props.DateInStock}<br><br><br><br>


                    Payment Type: ${props.payType}<br>
                    Payment Terms: ${props.payTerms}<br>
                    Shipping Date ${props.shippingDate}<br><br><br>




                    Shipping Company : <br>
                    Company Name: ${props.shipCompName}<br>
                    Address 1: ${props.shipAddress1}<br>
                    Address 2: ${props.shipAddress2}<br>
                    City ${props.shipCity}<br>
                    State: ${props.shipState}<br>
                    Zip: ${props.shipZip}<br>

                    Notes left by ${props.vendorName} : <br> ${props.notes}.



                    <br><br>
                    ${disclaimerMessage}
                    `
    };
}