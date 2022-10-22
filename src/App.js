import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SignUp from "./components/profile/SignUp";
import { authActions } from "./store/AuthSlice";
import { mailActions } from "./store/MailSlice";
import ComposeMail from "./components/Mail/ComposeMail";
import MailBox from "./components/Mail/MailBox";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  dispatch(authActions.setIsAuth());
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const reciever = useSelector((state) => state.auth.recieverId);
  axios
    .get(
      `https://mobile-chat-b9890-default-rtdb.firebaseio.com/mails/${reciever}${userId}.json`
    )
    .then((res) => {
      let datas = res.data;

      let mailArray = [];
      for (let id in datas) {
        let mail = datas[id];
        mail.id = id;
        mailArray.push(mail);
      }
      dispatch(mailActions.addMail(mailArray));
    });
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
    </>
  );
}

export default App;
