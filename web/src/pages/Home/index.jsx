import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'
import fruits from '../../assets/fruits-header.svg'
/*swiper lib*/
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])

import bolodamasco from '../../assets/pratos/molla.png'

export function Home({ admin = false }) {
    const breakpoints = {
        // quando a largura da tela for menor ou igual a 640 pixels
        550: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // quando a largura da tela for menor ou igual a 768 pixels
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // quando a largura da tela for maior que 768 pixels
        1024: {
            slidesPerView: 4,
            spaceBetween: 15
        }
    }

    return (
        <Container>
            <Header admin />
            <main>
                <header>
                    <div className="img-content">
                        <img src={fruits} alt="" />
                    </div>
                    <div className="text-content">
                        <h1>Sabores inigualáveis</h1>
                        <p>
                            Sinta o cuidado do preparo com ingredientes
                            selecionados
                        </p>
                    </div>
                </header>
                <section className="content">
                    <h1>Refeições</h1>
                    <div className="cards-content">
                        <Swiper
                            spaceBetween={20}
                            className="mySwiper"
                            slidesPerView={1}
                            breakpoints={breakpoints}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                    isAdmin={admin}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                    isAdmin={admin}
                                ></Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="content">
                    <h1>Sobremesas</h1>
                    <div className="cards">
                        <Swiper
                            spaceBetween={20}
                            className="mySwiper"
                            slidesPerView={1}
                            breakpoints={breakpoints}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="content">
                    <h1>Bebidas</h1>
                    <div className="cards">
                        <Swiper
                            spaceBetween={20}
                            className="mySwiper"
                            slidesPerView={1}
                            breakpoints={breakpoints}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </Container>
    )
}
