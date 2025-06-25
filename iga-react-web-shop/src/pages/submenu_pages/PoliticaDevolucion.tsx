
const PoliticaDevolucion: React.FC = () => {
    return (
        <div className="flex flex-col gap-5 p-5 md:p-10 xl:px-100  text-justify">
            <p className="text-3xl font-bold">Politica de Devolución (PNC)</p>
            <p>
                En IGA productos, valoramos la satisfacción de nuestros clientes y nos esforzamos por ofrecer productos de alta calidad que cumplan con sus expectativas. Por lo tanto, hemos desarrollado una política de devolución para ayudar a nuestros clientes en dado caso se presente alguno de las siguientes opciones. A continuación, se detallan los términos y condiciones de esta política:
            </p>
            <p className="font-bold text-xl">En caso de producto no conforme</p>
            <div>
                <p className="font-bold text-xl">Formulario</p>
                <p>
                    Para solicitar un proceso de devolución de producto, deberá llenar el siguiente formulario (link del formulario) o puede reportar dicha inconformidad vía correo al área de atención a clientes (atenciónacliente@igaproductos.com.mx) con copia a la administración general (administracion@igaproductos.com.mx).
                </p>
            </div>
            <div>
                <p className="font-bold text-xl">Garantia</p>
                <p>
                    Se hará valida la garantía únicamente cuando la mercancía y/o articulo adquirido presenten defectos de fábrica y/o daños severos, visibles e imputables al manejo en almacén o traslado del mismo por parte de paquetería, en esta situación se reserva el derecho de cancelación.
                </p>
            </div>
            <div>
                <p className="font-bold text-xl">Devolución</p>
                <p>
                    IGA productos podrá recibir mercancía como devolución solo proporcionando el número de lote y número de folio de la factura, de no tener estos datos por parte del cliente, la mercancía no será aceptada.

                    La devolución podrá ser recibida en un plazo de 48 hrs. después de recibir su producto y no se aceptará devoluciones en casos de error de pedido como en el producto, modelo, clase, ajuste, color o marca.
                </p>
            </div>
        </div>
    );
};

export default PoliticaDevolucion;