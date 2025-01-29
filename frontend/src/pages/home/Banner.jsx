import banner from "../../assets/banner.png"
export default function Banner() {
    return (
        <div className="flex md:flex-row-reverse flex-col items-center justify-between gap-12 py-16">
            <div className="md:w-1/2 w-full flex items-center md:justify-end">
                <img src={banner} alt="" />
            </div>
            <div className="md:w-1.2 w-full">
                <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
                <p className="mb-10">It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
            </div>
        </div>
    )
}