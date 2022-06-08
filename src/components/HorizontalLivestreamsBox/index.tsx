import { FunctionalComponent, h } from 'preact';
import { LivestreamDisplayData } from '../../types/TableDisplayData/LivestreamDisplayData';
import LivestreamComponent from '../LivestreamComponent';
import style from './style.module.css';

export interface HorizontalLivestreamsBoxProps {
  data: Array<LivestreamDisplayData>;
}

const HorizontalLivestreamsBox: FunctionalComponent<
  HorizontalLivestreamsBoxProps
> = (props: HorizontalLivestreamsBoxProps): h.JSX.Element => {
  return (
    <div class={style.horizontalFlex}>
      {props.data.map((e, index) => (
        <LivestreamComponent
          id={index}
          key={index}
          VTuberId={e.VTuberId}
          imgUrl={e.imgUrl}
          name={e.name}
          thumbnailUrl={e.thumbnailUrl}
          videoUrl={e.videoUrl}
          startTime={e.startTime}
        />
      ))}
    </div>
  );
};

export default HorizontalLivestreamsBox;
