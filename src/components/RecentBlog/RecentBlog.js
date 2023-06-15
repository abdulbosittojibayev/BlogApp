import React from "react";
import "./RecentBlog.css";

function RecentBlog() {
  return (
    <div className="container">
      <div className="recent__blog">
        <h3 className="recent__blog__title">RecentBlog Posts</h3>
        <div className="recent__cards">
          <div className="recent__card">
            <img
              src="https://broinfo.ru/wp-content/uploads/2020/08/1572808974_jelloustoun-nacionalnyj-park-ssha-34-1536x1020.jpg"
              alt=""
            />
            <div className="recent__card-textbox">
              <a href="">Olivia Rhye • 1 Jan 2023</a>
              <h2>UX review presentations</h2>
              <p>
                How do you create compelling presentations that wow your
                colleagues and <br /> impress your managers?
              </p>
              <ul className="recent__collection">
                <li className="recent__coll__item">Design</li>
                <li className="recent__coll__item">Research</li>
                <li className="recent__coll__item">Presentation</li>
              </ul>
            </div>
          </div>
          <div className="recent__carts">
            <div className="recent__cart">
              <div className="recent__cart__img">
                <img
                  src="https://broinfo.ru/wp-content/uploads/2020/08/1572808974_jelloustoun-nacionalnyj-park-ssha-34-1536x1020.jpg"
                  alt=""
                />
              </div>
              <div className="recent__cart__text">
                <a href="">Olivia Rhye • 1 Jan 2023</a>
                <h2>UX review presentations</h2>
                <p>
                  Linear helps streamline software <br /> projects, sprints, tasks, and
                  bug <br /> tracking. Here’s how to get...
                </p>
                <ul className="recent__collection">
                  <li className="recent__coll__item">Design</li>
                  <li className="recent__coll__item">Research</li>
                  <li className="recent__coll__item">Presentation</li>
                </ul>
              </div>
            </div>
            <div className="recent__cart">
              <div className="recent__cart__img">
                <img
                  src="https://broinfo.ru/wp-content/uploads/2020/08/1572808974_jelloustoun-nacionalnyj-park-ssha-34-1536x1020.jpg"
                  alt=""
                />
              </div>
              <div className="recent__cart__text">
                <a href="">Olivia Rhye • 1 Jan 2023</a>
                <h2>UX review presentations</h2>
                <p>
                  Linear helps streamline software <br /> projects, sprints, tasks, and
                  bug <br /> tracking. Here’s how to get...
                </p>
                <ul className="recent__collection">
                  <li className="recent__coll__item">Design</li>
                  <li className="recent__coll__item">Research</li>
                  <li className="recent__coll__item">Presentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecentBlog;
