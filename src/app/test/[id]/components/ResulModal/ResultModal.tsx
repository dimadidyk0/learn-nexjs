import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import s from './ResultModal.module.css';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function ResultModal({
  isOpen,
  onClose,
  title,
  description,
}: Props) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className={s.modal}>
        <Typography
          className={s.modalTitle}
          id="modal-modal-title"
          variant="h4"
          component="h2"
        >
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Link className={s.button} href={`/hiragana`}>
          Go home
        </Link>
      </Box>
    </Modal>
  );
}
