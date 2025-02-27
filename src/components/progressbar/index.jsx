import { Progress } from "antd";
import { useGetTodosQuery } from "../../redux/todo /todo";

const ProgressBar = () => {
  const { data: tasks = [], isLoading } = useGetTodosQuery();

  if (isLoading) return <p>Loading progress...</p>;

  const completed = tasks.filter((task) => task.status === "done").length;
  const percent = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <div className="w-full px-4 py-2">
      <h1 className="font-bold text-[30px] text-[#443531]">Your progress</h1>
      <Progress
        percent={percent}
        strokeColor={{ "0%": "#a98467", "100%": "#a98467" }} 
        showInfo={true}
        size="large" 
        className="rounded-xl transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default ProgressBar;
