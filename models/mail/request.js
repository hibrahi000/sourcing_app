const disclaimerMessage = ` The information contained in this communication is confidential, may be privileged and is intended for the exclusive use of the above named addressee(s). If you are not the intended recipient(s), you are expressly prohibited from copying, distributing, disseminating, or in any other way using any information contained within this communication. If you have received this communication in error please contact the sender by telephone or by response via mail. We have taken precautions to minimize the risk of transmitting software viruses, but we advise you to carry out your own virus checks on any attachment to this message. We cannot accept liability for any loss or damage caused by software virus. <br>
Located At: 131 Heartland Boulevard, Edgewood, New York, U.S Phone:866-282-4729 `;

exports.itemRequest = (props) => {
	return {
		from: `${props.staffName} <${props.staffEmail}>`,
		to: props.vendorMainEmail,
		cc: props.vendorCcEmail,
		subject: props.subject, // Subject line
		html: `
									Hello ${props.vendorName}, <br>
									ABH has decided to use the following link to source pricing for materials. Should there be any issues please feel free to contact us directly at Purchasing@abhnature.com 
									<br><br>


									We at ABH have requested a quote for the following material: ${props.material}
									<br><br>

									${props.targetPrice}<br>
									Notes: ${props.notes}<br><br>

									<br>

									Attached to this email is a link that will allow you to send us your quote. This link will expire in 5 Days or once you submit the form.


									<br><br><br><br><br><br>

									We at ABH-Nature Appreciate your business with us and hope to hear from you soon.

									<br><br>
                                    ${disclaimerMessage}
									<br><br>

									<a href = "http://app.abhpharma.com/ABH_Invoice_Form/?vend=${props.vendorName}&tok=${props.token}">ABH Invoice Form<a>


									<br><br>

									If you do not supply this material and want to be removed from the email chain please click the following link <br>
									List-Unsubscribe: <mailto: emailAddress>, <unsubscribe URL > <a href = "http://app.abhpharma.com/Do_Not_Supply/?vend=${props.vendorName}&tok=${props.token}">Unsubscribe<a> `
	};
};

exports.TEST_ItemRequest = (props) => {
	return {
		from: props.from,
		to: props.testEmail,
		// cc: props.ccEmail,
		subject: 'This is a test Email : ITEM REQUEST', // Subject line
		html: `
                        Hello ${props.vendorName}, <br>
                        ABH has decided to use the following link to source pricing for materials. Should there be any issues please feel free to contact us directly at Purchasing@abhnature.com 
                        <br><br>


                        We at ABH have requested a quote for the following material: ${props.material}
                        <br><br>

                        ${props.targetPrice}<br>
                        Notes: ${props.notes}<br><br>

                        <br>

                        Attached to this email is a link that will allow you to send us your quote. This link will expire in 5 Days or once you submit the form.


                        <br><br><br><br><br><br>

                        We at ABH-Nature Appreciate your business with us and hope to hear from you soon.

                        <br><br>
                        ${disclaimerMessage}
                        <br><br>

                        <a href = "http://app.abhpharma.com/ABH_Invoice_Form/?vend=${props.vendorName}&tok=${props.token}">ABH Invoice Form<a>


                        <br><br>

                        If you do not supply this material and want to be removed from the email chain please click the following link <br>
                        List-Unsubscribe: <mailto: emailAddress>, <unsubscribe URL > <a href = "http://localhost:5000/Do_Not_Supply/?vend=${props.vendorName}&tok=${props.token}">Unsubscribe<a> `
	};
};
