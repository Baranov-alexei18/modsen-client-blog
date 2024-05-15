import { useEffect, useRef } from 'react';

import { BaseModal } from '../baseModal';
import { ModalProps } from '../types';

import styles from '../styles.module.scss';

export const VideoModal = ({ isOpen, onClose }: Partial<ModalProps>) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isOpen) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isOpen]);

  return (
    <BaseModal isOpen={isOpen!} onClose={onClose!}>
      <video ref={videoRef} autoPlay controls className={styles.video}>
        <track kind="captions" />
        <source src="/video/modsen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </BaseModal>
  );
};
