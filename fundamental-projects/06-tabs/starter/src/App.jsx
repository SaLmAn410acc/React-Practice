import { useEffect, useState } from "react";
import Loading from "./Loading";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const { title, company, dates, duties } = jobs[value];

  return (
    <section className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((job, index) => {
          return (
            <button
              key={index}
              className={`job-btn ${index === value && "active-btn"}`}
              onClick={() => setValue(index)}
            >
              {job.company}
            </button>
          );
        })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>

        <div>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default App;
