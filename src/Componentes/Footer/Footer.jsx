import React from 'react'

function Footer() {
    return (
        <div className="di">
            <footer className="bottom-0 left-0 z-20 w-full gap-11 bg-[#412a56] px-4 py-4 md:px-24">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="items-start flex flex-col justify-center mb-6 md:mb-0">
                            <img
                                className="h-[120px] w-[226px]"
                                alt="Logo blanco"
                                src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/logo-blanco-1-1@2x.png"
                            />
                            <p className="text-white text-base md:text-lg p-5 w-full md:w-96 text-left">
                                Impacto de nuestras actuaciones en el bienestar y el desarrollo de las mujeres con las que trabajamos.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2">
                            <div>
                                <h2 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-semibold text-white uppercase">Cursos Populares</h2>
                                <div className="text-white text-base md:text-lg underline">Marketing Digital</div>
                                <p className="text-white text-base md:text-lg underline">Instalación y configuración de redes de internet.</p>
                                <div className="text-white text-base md:text-lg underline">Desarrollo de páginas web</div>
                                <div className="text-white text-base md:text-lg underline">Desarrollo de aplicaciones móviles.</div>
                                <p className="text-white text-base md:text-lg underline">Instalación de cámaras de seguridad.</p>
                            </div>
                            <div>
                                <h2 className="mb-4 md:mb-6 text-[24px] md:text-[32px] font-semibold text-white uppercase">Contáctanos</h2>
                                <p className="direcci-n-AV-a">
                                    <span className="text-white text-base md:text-lg font-bold">Dirección: </span>
                                    <span className="text-white text-base md:text-lg">AV 26 # 26 A - 05 B/Las Granjas</span>
                                </p>
                                <p className="email-fundasoftmiss">
                                    <span className="text-white text-base md:text-lg font-bold">Email:</span>
                                    <span className="text-white text-base md:text-lg"> fundasoftmiss@gmail.com</span>
                                </p>
                                <p className="div-2">
                                    <span className="text-white text-base md:text-lg font-bold">Teléfono: </span>
                                    <span className="text-white text-base md:text-lg">3186929471</span>
                                </p>
                                <div className="text-white text-base md:text-lg">www.fundasoftmiss.com</div>
                                <img className="img mt-4" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/frame-16-1.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='w-full items-center flex flex-col-reverse md:flex-row bg-[#c23099] px-4 py-4 md:px-24 text-center'>
                <div className="md:flex items-center text-lg">
                    <span>&copy;2023 FundaSoff Miss.</span>
                    <span className="hidden md:inline-block">Todos los derechos reservados</span>
                </div>
                <div className="md:flex leading-normal gap-4 md:gap-10 underline text-lg mt-2 md:mt-0 ">
                    <span>Políticas de Cookies</span>
                    <span>Términos y condiciones</span>
                </div>
            </div>
        </div>
    )
}

export default Footer