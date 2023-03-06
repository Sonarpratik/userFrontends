import React, { useState } from "react";
import { useEffect } from "react";
import "./css/appoint.css";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import MomentUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";

const Appoint = () => {
  const [start, handleStart] = useState(new Date());
  const [end, handleEnd] = useState(new Date());

  const [data, setData] = useState();
  const [_id, setId] = useState();
  const [name, setName] = useState();

  const [userid, setUserID] = useState();

  const [userData, setUserData] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const callAboutPage = async () => {
    //get all login user data
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = response;
      const data1 = await response.json();
      setUserData(data1);
      // const a = await userData.json();
      setName(data1.name);
      setUserID(data1._id);
      setEmail(data1.email);
      setPhone(data1.phone);

      if (data.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate("/login");
    }
  };

  const forALLtimes = async () => {
    //get all appointments time
    try {
      const response = await fetch("/time", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data5 = await response.json();
      setData(data5);
    } catch (e) {
      console.log(e);
    }
  };

  const setTime = async (e) => {
    e.preventDefault();
    //set start and end time of an appointments
    try {
      const response = await fetch("http://localhost:4000/appoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid,
          start,
          end,
          name,
          email,
        }),
      });

      const data5 = await response;
      if (data5.status === 200) {
        window.alert("Date Saved");
      } else {
        window.alert("Invalid Date");
      }
      forALLtimes();
    } catch (e) {
      console.log(e);
    }
  };

  const singleOwner = async () => {
    try {
      const response = await fetch("http://localhost:4000/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
        }),
      });
      const data = await response.json();
      // setName(data)
      // console.log(_id);
      // if (data.status === 200) {
      //   window.alert("done");
      // }else{
      //   window.alert("failed")
      // }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteit = async (a) => {
    //delete particular time constraint
    try {
      const response = await fetch(`http://localhost:4000/scam/${a}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(_id);
      const got = await response.json();
      // console.log(got);
      forALLtimes();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    forALLtimes();
    // singleOwner();
    callAboutPage();
  }, []);

  function hjh(a) {
    var date89 = new Date(a);
    const vfig = date89.toString();
    return vfig;
  }

  return (
    <div>
      <div className="container fg">
        start
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker value={start} onChange={handleStart} />
        </MuiPickersUtilsProvider>
        end
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker value={end} onChange={handleEnd} />
        </MuiPickersUtilsProvider>
        <div className="row row-cols-md-3">
          <button onClick={setTime}>clidlsd</button>
          {/* <input
            type="text"
            placeholder="start"
            // onChange={(e) => setStart(e.target.value)}
          />
          <input
            type="text"
            placeholder="end"
            // onChange={(e) => setEnd(e.target.value)}
          /> */}
        
          <p>{userid}</p>
          {data &&
            data.map((item) => (
              <div key={item._id} className="col-md">
                <p>{hjh(item.start)}</p>
                <p>{hjh(item.end)}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>

                <button onClick={() => deleteit(item._id)}>delete</button>
                <input type="text" value={item.userid} />
                <p></p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appoint;
