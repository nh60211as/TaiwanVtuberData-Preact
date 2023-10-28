import { withText } from "preact-i18n";
import { openVideoModal } from "../../global/VideoModalState";
import { VideoInfo } from "../../types/Common/VideoInfo";

const ShowVideoButton = withText("text.showVideo")(
  (props: { showVideo?: string; popularVideo: VideoInfo }) => (
    <input
      type="button"
      value={props.showVideo}
      onClick={(): void => openVideoModal(props.popularVideo)}
    />
  ),
);

export default ShowVideoButton;
