import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function ImageOpener({
  isOpen,
  image,
  onClose,
  onOpen,
  cancelRef,
  title
}) {
  return (
    <>
      <Modal
        size={"2Xl"}
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image maxW={"100%"} src={image} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
