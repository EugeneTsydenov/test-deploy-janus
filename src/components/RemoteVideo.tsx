import * as React from 'react';
import {roomStore} from "@/store/room";
import Video from "@/components/Video";
import {observer} from "mobx-react-lite";
import WaitingConnectionCard from "@/components/WaitingConnectionCard";
import VideoCard from "@/components/VideoCard";
import {janusStore} from "@/store/janus";

const RemoteVideo = observer(() => {
  if(!roomStore.remoteStream || !roomStore.isJoined) {
    return <WaitingConnectionCard/>
  }

  return (
    <VideoCard>
      <Video stream={roomStore.remoteStream} autoPlay className='rounded-[8px]'/>
      <span className='p-[4px] bg-black rounded-[4px] text-[12px] absolute bottom-[4px] left-[4px] opacity-80'>Companion</span>
    </VideoCard>
  );
});

export default RemoteVideo;

