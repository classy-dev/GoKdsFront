import React from 'react';

interface ISettingHead {
  name: string;
  back?: () => void;
  soundEffectPlay?: (src: string) => void;
}

const LayerSettingHead = ({ name, back, soundEffectPlay }: ISettingHead) => {
  return (
    <div className="head">
      {back && (
        <button
          type="button"
          className="btn_back"
          onClick={() => {
            back();
            soundEffectPlay?.('/sound/btn_menu.mp3');
          }}
        >
          <span className="hiddenZone">뒤로</span>
        </button>
      )}
      <h2>{name}</h2>
    </div>
  );
};

export default LayerSettingHead;
