import HoverImage from './HoverImage'

function GalleryImage() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="about-img1">
                        <HoverImage src="/images/gallery1.png" alt="" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-6 about-img2">
                            <HoverImage src="/images/gallery2.png" alt="" />
                            <div className="about-img3">
                                <HoverImage src="/images/gallery3.png" alt="" />
                            </div>
                        </div>

                        <div className="col-sm-6 about-img4">
                            <HoverImage src="/images/gallery4.png" alt="" />
                            <div className="about-img5">
                                <HoverImage src="/images/gallery5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryImage