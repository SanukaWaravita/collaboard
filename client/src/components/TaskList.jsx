const STATUS_LABELS = {
  todo: "To Do",
  doing: "Doing",
  done: "Done",
};

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <section className="task-list-empty">
        <h2>No tasks yet</h2>

        <p>
          Tasks created in this project will appear here.
        </p>
      </section>
    );
  }

  return (
    <section
      className="task-list"
      aria-labelledby="task-list-title"
    >
      <header className="task-list__header">
        <h2 id="task-list-title">All Tasks</h2>

        <span className="task-list__count">
          {tasks.length}
        </span>
      </header>

      <div className="task-list__table-wrapper">
        <table className="task-list__table">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="task-list__title">
                  {task.title}
                </td>

                <td className="task-list__description">
                  {task.description || "No description"}
                </td>

                <td>
                  <span
                    className={
                      `task-status ` +
                      `task-status--${task.status}`
                    }
                  >
                    {STATUS_LABELS[task.status] ??
                      task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TaskList;