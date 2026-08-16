import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_h8gqykq";

const TEMPLATE_EMPRESA = "template_hfa4vm5";

const TEMPLATE_CLIENTE = "template_ss7nd0p";

const PUBLIC_KEY = "9s4dUxLUENTY5V8Li";

export const enviarMailEmpresa = async (datos) => {

    return emailjs.send(

        SERVICE_ID,

        TEMPLATE_EMPRESA,

        datos,

        PUBLIC_KEY

    );

};

export const enviarMailCliente = async (datos) => {

    return emailjs.send(

        SERVICE_ID,

        TEMPLATE_CLIENTE,

        datos,

        PUBLIC_KEY

    );

};