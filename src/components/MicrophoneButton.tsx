import * as React from 'react';
import MicrophoneOnSvg from "@/components/MicrophoneOnSvg";
import MicrophoneOffSvg from "@/components/MicrophoneOffSvg";
import {janusStore} from "@/store/janus";

const MicrophoneButton = () => {
  const [isTurnOn, setIsTurnOn] = React.useState<boolean>(true)

  const onClick = () => {
    setIsTurnOn(prev => !prev)
    janusStore.initJanus(() => {
      janusStore.toggleAudio()
    })
  }

  return (
    <button onClick={onClick} className='flex flex-col items-center'>
      {
        isTurnOn ?
          <MicrophoneOnSvg/> :
          <MicrophoneOffSvg/>
      }
      <span className='text-[9px]'>{isTurnOn ? 'Выключить звук' : 'Включить звук'}</span>
    </button>
  );
};

export default MicrophoneButton;
