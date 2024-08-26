import * as React from 'react';
import CameraOnSvg from "@/components/CameraOnSvg";
import CameraOffSvg from "@/components/CameraOffSvg";
import {janusStore} from "@/store/janus";

const CameraButton = () => {
  const [isTurnOn, setIsTurnOn] = React.useState<boolean>(true)

  const onClick = () => {
    setIsTurnOn(prev => !prev)
    janusStore.initJanus(() => {
      janusStore.toggleVideo()
    })
  }

  return (
    <button onClick={onClick} className='flex flex-col items-center'>
      {
        isTurnOn ?
          <CameraOnSvg/> :
          <CameraOffSvg/>
      }
      <span className='text-[9px]'>{isTurnOn ? 'Выключить камеру' : 'Включить камеру'}</span>
    </button>
  );
};

export default CameraButton;
