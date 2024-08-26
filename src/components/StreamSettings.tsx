import * as React from 'react';
import MicrophoneButton from "@/components/MicrophoneButton";
import CameraButton from "@/components/CameraButton";
import OtherStreamSettings from "@/components/OtherStreamSettings";

const StreamSettings = () => {
  return (
    <div className='bg-black px-[2px] py-[8px] max-w-[232px] rounded-b-[8px] flex items-center gap-2 justify-between'>
      <MicrophoneButton/>
      <CameraButton/>
      <OtherStreamSettings/>
    </div>
  );
};

export default StreamSettings;
