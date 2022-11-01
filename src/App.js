import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authActions } from "./store/AuthSlice";
import { mailActions } from "./store/MailSlice";

import SignUp from "./components/profile/SignUp";
import ComposeMail from "./components/Mail/ComposeMail";
import MailBox from "./components/Mail/MailBox";
import ReadMail from "./components/Mail/ReadMail";
import useAxiosGet from "./hooks/useAxiosGet";

function App() {
  const dispatch = useDispatch();
  dispatch(authActions.setIsAuth());
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const { data, fetchError } = useAxiosGet(
    `https://mobile-chat-b9890-default-rtdb.firebaseio.com/mails/${userId}inbox.json`
  );

  let mailArray = [];
  for (let id in data) {
    let mails = data[id];
    console.log(id);
    mailArray.push(mails);
  }
  dispatch(mailActions.addMail(mailArray));

  fetchError && alert(fetchError);

  return (
    <>
      {!isAuth && <SignUp />}
      {!isAuth && (
        <Route path="/mailBox">
          <Redirect to="/" />
        </Route>
      )}
      {isAuth && <Redirect to="/mailBox" />}

      <Route path="/composeMail">
        <ComposeMail />
      </Route>
      <Route path="/mailBox">
        <MailBox />
      </Route>
      <Route path="/readMail">
        <ReadMail />
      </Route>
    </>
  );
}

export default App;
