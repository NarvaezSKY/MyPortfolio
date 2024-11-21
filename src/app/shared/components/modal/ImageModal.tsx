import { useEffect, useState } from "react";
import { toast } from "sonner";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";
import { useTranslation } from 'react-i18next';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  lgSize?: string;
}

export const ImageModal = ({ isOpen, onClose, src, alt, lgSize }: ImageModalProps) => {

  const { t } = useTranslation();
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (isOpen && !toastShown) {
      toast.info(t("modal.message", { ns: "modal" }), {
        duration: 2000,
        position: "bottom-center",
      });
      setToastShown(true);
    }

    if (!isOpen) {
      setToastShown(false);
    }
  }, [isOpen, toastShown, t]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg outline-none"
          sx={{
            width: {
              xs: "90%",
              sm: "70%",
              md: "50%",
              lg: lgSize || "50%",
            },
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg block"
          />
        </Box>
      </Fade>
    </Modal>
  );
};
