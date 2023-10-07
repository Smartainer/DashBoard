import Dashboard from "../../dashboard";

function ShowContainerAnalysisModalBody({ extraObject, closeModal }) {
  return (
    <>
      <Dashboard container_id={extraObject.id} />
    </>
  );
}

export default ShowContainerAnalysisModalBody;
