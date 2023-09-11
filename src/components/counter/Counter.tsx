import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "state";
import { actions } from "state/counter";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Counter component</span>
              <h4>
                Counter: <strong>{count}</strong>
              </h4>
              <p>
                Here you can increment and decrement counter value using buttons
                below. All the state updates are performed via redux actions.
              </p>
            </div>
            <div className="card-action">
              <div className="group">
                <button
                  className="waves-effect waves-teal btn-flat red"
                  type="button"
                  data-qa="decrement-counter"
                  onClick={() => dispatch(actions.decrement())}
                >
                  decrement
                </button>
                <button
                  className="waves-effect waves-teal btn-flat blue"
                  type="button"
                  data-qa="increment-counter"
                  onClick={() => dispatch(actions.increment())}
                >
                  increment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
