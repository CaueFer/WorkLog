import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

const SelectMarkersModal = () => {
  return (
    <Dialog defaultOpen>
      <DialogContent className="bg-white text-black">
        <DialogHeader>
          <DialogTitle>Sincronização com Jira</DialogTitle>
          <DialogDescription>Selecione os Marcadores que deseja sincronizar</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">Teste</div>
      </DialogContent>
    </Dialog>
  );
};

export default SelectMarkersModal;
