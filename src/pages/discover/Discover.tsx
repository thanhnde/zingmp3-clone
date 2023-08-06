import SlideBanner from "./SlideBanner/SlideBanner";
import Chill from "./Chill/Child";
import MotChutYeuDoi from "./MotChutYeuDoi/MotChutYeuDoi";
import NewRelease from "./NewRelease/NewRelease";

const Discover = () => {
  return (
    <>
      <title>Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV</title>
      <SlideBanner />
      <NewRelease />
      <Chill/>
      <MotChutYeuDoi/>
    </>
  )
}

export default Discover;