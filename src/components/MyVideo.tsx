import * as React from 'react';
import {observer} from "mobx-react-lite";
import Video from "@/components/Video";
import {roomStore} from "@/store/room";
import WaitingConnectionCard from "@/components/WaitingConnectionCard";
import VideoCard from "@/components/VideoCard";
import StreamSettings from "@/components/StreamSettings";

const MyVideo = observer(() => {
  if(!roomStore.localStream || !roomStore.isJoined) {
    return <WaitingConnectionCard/>
  }


  return (
    <div>
      <VideoCard>
        <Video stream={roomStore.localStream} muted autoPlay className='rounded-none rounded-t-[8px] block'/>
        <span
          className='p-[4px] bg-black rounded-[4px] text-[12px] absolute bottom-[4px] left-[4px] opacity-80'>
          You
        </span>
      </VideoCard>
      <StreamSettings/>
    </div>
  );
});

export default MyVideo;
