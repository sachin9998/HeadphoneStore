import { UpdateFollower } from "react-mouse-follower"


const BannerText = () => {
    return (
        <section className="py-12 text-center font-varela">
            <div className="container">

                <div className="bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">

                    <UpdateFollower
                        mouseOptions={{
                            backgroundColor: "black",
                            zIndex: 999,
                            followSpeed: 0.5,
                            scale: 10,
                            mixBlendMode: "screen",
                        }}
                    >
                        <p className="font-bold text-xl max-w-[700px] mx-auto leading-normal">The Headphones With Industry Leading Active Noise Cancelling</p>
                    </UpdateFollower>

                </div>
            </div>

        </section>
    )
}

export default BannerText