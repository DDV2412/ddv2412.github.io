import React from "react";
import { SkillWrapper } from "./styled";

const Skill = () => {
  return (
    <>
      <SkillWrapper>
        <h1>Skills</h1>
        <section>
          <div>
            <div>
              <label htmlFor="Javacript">Javascript & Express JS</label>
              <p>Pro</p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              readOnly
              name="Javacript"
              value="85"
            />
          </div>
          <div>
            <div>
              <label htmlFor="PHP">PHP & Laravel</label>
              <p>Intermediate</p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              name="PHP"
              value="75"
              readOnly
            />
          </div>
          <div>
            <div>
              <label htmlFor="Java&SpringFramework">
                Java & Spring Framework
              </label>
              <p>Intermediate</p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              name="Java&SpringFramework"
              value="65"
              readOnly
            />
          </div>
          <div>
            <div>
              <label htmlFor="Database">Database</label>
              <p>Pro</p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              name="Database"
              value="80"
              readOnly
            />
          </div>
        </section>
      </SkillWrapper>
    </>
  );
};

export default Skill;
