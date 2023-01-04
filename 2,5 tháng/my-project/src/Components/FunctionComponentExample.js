import { useState } from "react";

function FunctionComponentExample() {
  const [status, setStatus] = useState("đang đi học");
  function chengeStatus() {
    setStatus(status === "Đang đi học" ? "Đã nghỉ học" : "Đang đi học");
  }
  return (
    <>
      <h2>{status}</h2>
      <button onClick={chengeStatus}>ok</button>
    </>
  );
}
export default FunctionComponentExample;
