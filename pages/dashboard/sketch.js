import DashboardLayout from "../../layouts/DashboardLayout";
import { create } from "simple-drawing-board";
import { useEffect } from "react";

const Sketch = () => {
  useEffect(() => {
    const sdb = create(document.getElementById("canvas"));
    sdb.fill("#fff");
    sdb.setLineSize(1);
  }, []);
  return (
    <div>
      <canvas id="canvas" style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
};

export default Sketch;

Sketch.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
