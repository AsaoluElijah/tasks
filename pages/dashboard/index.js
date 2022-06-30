import DashboardLayout from "../../layouts/DashboardLayout";
import ActionDropdown from "../../components/ActionDropdown";
import { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";

const Index = () => {
  const [newTask, setnewTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete note interface design.",
      type: "todo",
    },
    { id: 3, title: "More customization to sketch", type: "idea" },
    { id: 4, title: "Add database feature", type: "in_progress" },
    { id: 5, title: "Design task interface", type: "completed" },
  ]);

  const [ideas, setideas] = useState([]);
  const [todos, settodos] = useState([]);
  const [in_progress, setin_progress] = useState([]);
  const [completed, setcompleted] = useState([]);

  useEffect(() => {
    setideas(tasks.filter((task) => task.type === "idea"));
    settodos(tasks.filter((task) => task.type === "todo"));
    setin_progress(tasks.filter((task) => task.type === "in_progress"));
    setcompleted(tasks.filter((task) => task.type === "completed"));
  }, []);
  return (
    <>
      <div
        className="row text-dark h-100 overflow-auto"
        style={{ flexWrap: "nowrap" }}
      >
        <div className="col-10 col-md-3">
          <div
            className="border h-100 rounded shadow"
            style={{ background: "#fbfbfbd4" }}
          >
            <div className="task-container mt-3">
              <h5 className="task-con-title">Ideas</h5>
              <div className="mt-4">
                <ReactSortable
                  list={ideas}
                  setList={setideas}
                  group="tasks"
                  // onChange={() => alert("ideas change")}
                >
                  {ideas.map((task) => (
                    <>
                      <div className="task-card bg-white mb-3" key={task.id}>
                        <p className="m-0">{task.title}</p>
                        <div className="text-end">
                          <ActionDropdown theme={"secondary"} />
                        </div>
                      </div>
                    </>
                  ))}
                </ReactSortable>
              </div>
              <form
                action=""
                className="form mt-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setideas([
                    ...ideas,
                    { id: ideas.length + 1, title: newTask },
                  ]);
                }}
              >
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Enter new task here.."
                  style={{ fontSize: "14px", height: "50px" }}
                  value={newTask}
                  onChange={(e) => setnewTask(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="col-10 col-md-3">
          <div
            className="border h-100 rounded shadow"
            style={{ background: "#fbfbfbd4" }}
          >
            <div className="task-container mt-3">
              <h5 className="task-con-title">Todo</h5>{" "}
              <div className="mt-3">
                <ReactSortable
                  list={todos}
                  setList={settodos}
                  group="tasks"
                  // onChange={() => alert("todos change")}
                >
                  {todos.map((task) => (
                    <>
                      <div className="task-card bg-white mb-3" key={task.id}>
                        <p className="m-0">{task.title}</p>{" "}
                        <div className="text-end">
                          <ActionDropdown theme={"secondary"} />
                        </div>
                      </div>
                    </>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-md-3">
          <div
            className="border h-100 rounded shadow"
            style={{ background: "#fbfbfbd4" }}
          >
            <div className="task-container mt-3">
              <h5 className="task-con-title">In Progress</h5>
              <div className="mt-3">
                <ReactSortable
                  list={in_progress}
                  setList={setin_progress}
                  group="tasks"
                >
                  {in_progress.map((task) => (
                    <>
                      <div className="task-card bg-white mb-3" key={task.id}>
                        <p className="m-0">{task.title}</p>{" "}
                        <div className="text-end">
                          <ActionDropdown theme={"secondary"} />
                        </div>
                      </div>
                    </>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-md-3">
          <div
            className="border h-100 rounded shadow"
            style={{ background: "#fbfbfbd4" }}
          >
            <div className="task-container mt-3">
              <h5 className="task-con-title">Completed</h5>
              <div className="mt-3">
                <ReactSortable
                  list={completed}
                  setList={setcompleted}
                  group="tasks"
                >
                  {completed.map((task) => (
                    <>
                      <div className="task-card bg-white mb-3" key={task.id}>
                        <p className="m-0">{task.title}</p>{" "}
                        <div className="text-end">
                          <ActionDropdown theme={"secondary"} />
                        </div>
                      </div>
                    </>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
