import { NextPage } from "next";
import handlePost from "./api/post";

const CreateUser: NextPage = () => {
  const user = {
    company: "Lemon Test",
    conferenceId: "Frankfurt 2020",
    conferenceLDate: "28.9.2020",
    conferenceLocation: "Frankfurt",
    conferenceSignUpDate: "27/07/2020, 20:35:13",
    conferenceSignUpTimestamp: "1595874913776",
    name: "Christoph",
    surname: "Herrmann",
    mail: "info@lemon-digital.com",
    message: "wir sind am strand",
  };

  const { company, conferenceId, conferenceLDate, conferenceLocation, conferenceSignUpDate, conferenceSignUpTimestamp, name, surname, mail, message } = user;

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { company, conferenceId, conferenceLDate, conferenceLocation, conferenceSignUpDate, conferenceSignUpTimestamp, name, surname, mail, message };
      await fetch("./api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Let's create a user</h1>
      <button onClick={submitData}>create user</button>
    </>
  );
};

export default CreateUser;
