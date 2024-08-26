import * as React from 'react';
import SettingsSvg from "@/components/SettingsSvg";

const OtherStreamSettings = () => {
  return (
    <button  className='flex flex-col items-center'>
      <SettingsSvg/>
      <span className='text-[9px]'>Другие настройки</span>
    </button>
  );
};

export default OtherStreamSettings;

